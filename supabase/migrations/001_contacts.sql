-- Tabela de contatos da landing page.
-- Rode no SQL Editor do Supabase (ou via CLI) em um projeto SEU, separado dos projetos da empresa.

create table if not exists public.contacts (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name)    between 2 and 100),
  email       text not null check (char_length(email)   between 5 and 200 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  service     text not null check (char_length(service) between 1 and 80),
  message     text not null check (char_length(message) between 10 and 2000)
);

alter table public.contacts enable row level security;

-- Projeto criado com "expor novas tabelas automaticamente" DESLIGADO: libere só o que precisa.
-- O visitante (anon) recebe apenas o privilégio de INSERT. Nada de select/update/delete.
grant insert on public.contacts to anon;

-- Visitantes (anon) só podem INSERIR. Ninguém consegue ler, alterar ou apagar pela API pública.
create policy "anon pode enviar contato"
  on public.contacts
  for insert
  to anon
  with check (true);

-- Sem policy de SELECT/UPDATE/DELETE de propósito: você lê os contatos pelo painel do Supabase
-- (Table Editor), que usa a chave de serviço e ignora o RLS.
