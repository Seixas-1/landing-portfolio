-- Aviso por e-mail a cada contato novo (gatilho + função).
-- Rode DEPOIS da 001_contacts.sql, no SQL Editor do Supabase ou via CLI.
--
-- Como funciona: ao inserir uma linha em public.contacts, a função abaixo lê dois segredos
-- do Vault, chama a API da Resend (via pg_net) e marca contacts.notified_at.
-- Nenhum segredo fica neste arquivo.
--
-- ANTES de rodar, crie os dois segredos no Vault (uma vez, com os SEUS valores):
--   select vault.create_secret('<chave de API da Resend>', 'resend_api_key');
--   select vault.create_secret('<seu e-mail>', 'notify_email');
-- Regras do remetente de teste (onboarding@resend.dev): o e-mail em notify_email precisa ser
-- o mesmo da conta Resend, escrito em minúsculas. Com domínio próprio verificado na Resend,
-- troque o remetente em 'from' abaixo.

create extension if not exists pg_net;
create extension if not exists supabase_vault;

-- Marca quando o aviso foi enviado (também serve de limite de envios, abaixo).
alter table public.contacts
  add column if not exists notified_at timestamptz;

-- Schema "private": não é exposto pela API pública do Supabase.
create schema if not exists private;

create or replace function private.notify_new_contact()
returns trigger
language plpgsql
security definer
set search_path to ''
as $function$
declare
  api_key  text;
  to_email text;
  recent   int;
begin
  select decrypted_secret into api_key  from vault.decrypted_secrets where name = 'resend_api_key';
  select decrypted_secret into to_email from vault.decrypted_secrets where name = 'notify_email';

  -- Sem segredos configurados: grava o contato e não avisa.
  if api_key is null or to_email is null then
    return new;
  end if;

  -- Limite contra abuso: no máximo 10 avisos a cada 10 minutos.
  select count(*) into recent
    from public.contacts
   where notified_at > now() - interval '10 minutes';
  if recent >= 10 then
    return new;
  end if;

  perform net.http_post(
    url     := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer ' || api_key
    ),
    body    := jsonb_build_object(
      'from',     'Enzo Seixas <onboarding@resend.dev>',
      'to',       jsonb_build_array(to_email),
      'reply_to', new.email,
      -- translate(...) tira quebras de linha para ninguém injetar cabeçalhos no assunto.
      'subject',  'Novo contato: ' || translate(new.name, chr(13) || chr(10), ' ')
                  || ' (' || translate(new.service, chr(13) || chr(10), ' ') || ')',
      'text',     'Nome: '    || new.name    || chr(10)
                  || 'E-mail: '  || new.email   || chr(10)
                  || 'Servico: ' || new.service || chr(10) || chr(10)
                  || 'Mensagem:' || chr(10) || new.message
    )
  );

  update public.contacts set notified_at = now() where id = new.id;
  return new;
exception when others then
  -- Falha no aviso nunca pode impedir o contato de ser salvo.
  return new;
end
$function$;

drop trigger if exists on_contact_insert on public.contacts;
create trigger on_contact_insert
  after insert on public.contacts
  for each row execute function private.notify_new_contact();
