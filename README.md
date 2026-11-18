# Landing page com formulário no Supabase

Landing page em React + TypeScript + Vite. O formulário de contato salva os leads numa tabela do Supabase.
Serve como projeto de portfólio (Pacote A do kit de freelancer) e como página de captação.

**Demonstração no ar:** https://seixas.pages.dev

## Rodar localmente

```bash
npm install
npm run dev
```

Sem variáveis de ambiente a página abre em **modo demonstração**: o formulário valida os campos,
mas não envia nada.

## Conectar o Supabase

1. Crie um projeto Supabase **seu** (use um projeto à parte, nunca o de clientes ou da empresa).
2. No SQL Editor, rode [supabase/migrations/001_contacts.sql](supabase/migrations/001_contacts.sql).
   Ele cria a tabela `contacts` com RLS: visitantes só podem **inserir**, ninguém lê pela API pública.
3. Copie `.env.example` para `.env` e preencha a URL e a chave **anon** (Project Settings > API).
   Nunca use a chave `service_role` no front-end.
4. Rode `npm run dev`, envie um contato e confira em Table Editor > `contacts`.

## Publicar

```bash
npm run build
```

Suba a pasta `dist/` na Vercel, Netlify ou Cloudflare Pages, e cadastre as duas variáveis
`VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nas configurações do serviço.

## O que mostrar no portfólio

- Link da página no ar, link do repositório e 3 prints (desktop, celular e o formulário com sucesso).
- Pontos técnicos: RLS só com INSERT para `anon`, validação no cliente e no banco (constraints),
  campo isca anti-robô, suporte a modo escuro e acessibilidade básica (labels, foco visível, `aria-live`).

## Personalizar antes de publicar

- Textos, serviços e prazos em `src/App.tsx`. Confirme que tudo é verdade (sem clientes ou números inventados).
- Se quiser receber um e-mail a cada contato, use um Database Webhook do Supabase ou uma Edge Function.
