import ContactForm from "./ContactForm";

const PACKAGES = [
  {
    title: "Landing page em React",
    text: "Página responsiva, com formulário de contato que guarda os leads no banco de dados e publicação no ar.",
    items: ["Até 5 seções", "SEO básico", "Formulário com Supabase", "Teste no celular e no PC"],
  },
  {
    title: "Backend com Supabase",
    text: "Login, tabelas e regras de acesso por usuário (RLS) configurados do jeito certo, para o app não vazar dados.",
    items: ["Autenticação por e-mail", "Tabelas e relacionamentos", "Regras de acesso (RLS)", "Armazenamento de arquivos"],
  },
  {
    title: "Correção de bugs e novas funcionalidades",
    text: "Seu app em React já existe e travou? Eu leio o código, acho o problema e explico o que foi feito.",
    items: ["Diagnóstico antes do preço", "Correção com teste", "Explicação do que mudou", "Funcionalidades pequenas"],
  },
];

const STEPS = [
  { n: "1", title: "Alinhamento", text: "Combinamos escopo, prazo e valor antes de começar. Nada de surpresa no meio do caminho." },
  { n: "2", title: "Entrega em etapas", text: "Você acompanha o progresso e dá feedback enquanto o projeto ainda é fácil de ajustar." },
  { n: "3", title: "Teste e entrega", text: "Testo antes de entregar e explico como tudo funciona." },
];

const YEAR = new Date().getFullYear();

const STACK =["React", "TypeScript", "Vite", "Node.js", "Supabase", "PostgreSQL", "REST APIs", "Git"];

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#topo" className="brand">
            Enzo<span>.dev</span>
          </a>
          <nav aria-label="Principal">
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como trabalho</a>
            <a href="#contato" className="btn small">
              Pedir orçamento
            </a>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">Desenvolvedor web full stack</p>
            <h1>
              Sites e sistemas web sob medida, com <em>React</em> e <em>Supabase</em>.
            </h1>
            <p className="lead">
              Landing pages, painéis e backend com login e regras de segurança. Projetos de escopo
              fechado, com prazo e valor combinados antes de começar.
            </p>
            <div className="cta">
              <a href="#contato" className="btn">
                Pedir orçamento
              </a>
              <a href="#servicos" className="btn ghost">
                Ver serviços
              </a>
            </div>
            <ul className="stack" aria-label="Tecnologias">
              {STACK.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="wrap">
            <h2>O que eu faço</h2>
            <div className="grid">
              {PACKAGES.map((p) => (
                <article key={p.title} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul>
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="section alt">
          <div className="wrap">
            <h2>Como eu trabalho</h2>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.n}>
                  <span className="num">{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="note">
              Trabalho com disponibilidade de algumas horas por semana, por isso prefiro projetos
              de escopo fechado, com prazo combinado de 1 a 2 semanas.
            </p>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="wrap narrow">
            <h2>Vamos conversar sobre o seu projeto</h2>
            <p className="lead small">
              Conte o que você precisa. Respondo com perguntas rápidas e uma estimativa de prazo e
              valor.
            </p>
            <ContactForm />
          </div>
        </section>
        <section id="privacidade" className="section alt">
          <div className="wrap narrow privacy">
            <h2>Política de privacidade</h2>
            <p>
              Esta página coleta apenas o que você digita no formulário de contato. Veja como
              esses dados são tratados, conforme a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <h3>Quais dados</h3>
            <p>Nome, e-mail, tipo de serviço escolhido e a mensagem que você escrever.</p>
            <h3>Para quê</h3>
            <p>
              Somente para responder ao seu contato e, se você quiser, combinar um orçamento. Não
              uso seus dados para propaganda e não os vendo.
            </p>
            <h3>Base legal</h3>
            <p>Seu consentimento, dado ao enviar o formulário.</p>
            <h3>Onde ficam guardados</h3>
            <p>
              Em um banco de dados do Supabase, provedor de infraestrutura que armazena os dados
              em meu nome. Não há outro compartilhamento. Esta página não usa cookies nem
              ferramentas de análise ou rastreamento.
            </p>
            <h3>Por quanto tempo</h3>
            <p>
              Pelo tempo necessário para responder e negociar o projeto. Depois disso, os dados
              podem ser apagados.
            </p>
            <h3>Seus direitos</h3>
            <p>
              Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento.
              Envie o pedido pelo formulário acima, escolhendo "Outro" e escrevendo "Privacidade"
              no começo da mensagem.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            © {YEAR} Enzo. Feito com React, TypeScript e Supabase. ·{" "}
            <a href="#privacidade">Privacidade</a>
          </p>
        </div>
      </footer>
    </>
  );
}
