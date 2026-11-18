-- Limpeza automática de contatos antigos (promessa da política de privacidade).
-- Rode DEPOIS da 001 e da 002, no SQL Editor do Supabase ou via CLI.
--
-- Regra: os dados de uma pessoa (identificada pelo e-mail) são apagados quando o ÚLTIMO contato
-- dela completa 6 meses. Se a pessoa escrever de novo, o prazo recomeça e as mensagens
-- anteriores dela ficam guardadas junto com a nova.
-- Roda todo dia às 03:00 UTC (00:00 em Brasília).
--
-- Para desligar: select cron.unschedule('limpar-contatos-antigos');
-- Para ver o histórico: select * from cron.job_run_details order by start_time desc limit 20;

create extension if not exists pg_cron;

create schema if not exists private;

create or replace function private.purge_old_contacts()
returns void
language sql
security definer
set search_path to ''
as $fn$
  delete from public.contacts c
   where not exists (
     select 1
       from public.contacts n
      where lower(n.email) = lower(c.email)
        and n.created_at >= now() - interval '6 months'
   );
$fn$;

-- Só o dono (postgres) e o agendador executam; a API pública não alcança o schema private.
revoke all on function private.purge_old_contacts() from public;

-- Agendar de novo com o mesmo nome apenas atualiza o job (não duplica).
select cron.schedule(
  'limpar-contatos-antigos',
  '0 3 * * *',
  $cron$select private.purge_old_contacts();$cron$
);
