import ContactForm from "./ContactForm";

const REPO = "https://github.com/Seixas-1/landing-portfolio";
const YEAR = new Date().getFullYear();

const STACK = ["React", "TypeScript", "Vite", "Node.js", "Supabase", "PostgreSQL", "REST APIs", "Git"];

const SERVICES = [
  {
    n: "01",
    title: "Landing page em React",
    text: "Página responsiva, com formulário de contato que guarda os leads no banco de dados e publicação no ar.",
    items: ["Até 5 seções", "SEO básico", "Formulário com Supabase", "Teste no celular e no PC"],
  },
  {
    n: "02",
    title: "Backend com Supabase",
    text: "Login, tabelas e regras de acesso por usuário (RLS) configurados do jeito certo, para o app não vazar dados.",
    items: ["Autenticação por e-mail", "Tabelas e relacionamentos", "Regras de acesso (RLS)", "Armazenamento de arquivos"],
  },
  {
    n: "03",
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

const FAQ = [
  {
    q: "Quanto tempo leva um projeto?",
    a: "Trabalho com projetos de escopo fechado, com prazo combinado de 1 a 2 semanas. Se o seu for maior, a gente divide em etapas menores.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você conta o que precisa pelo formulário. Eu respondo com algumas perguntas rápidas e uma estimativa de prazo e valor. O preço final só fecha depois que o escopo estiver claro.",
  },
  {
    q: "E o pagamento?",
    a: "Valor e forma de pagamento são combinados antes de começar. Quando o contrato é feito por uma plataforma como Workana, Fiverr ou 99Freelas, o pagamento passa por ela.",
  },
  {
    q: "Você mexe em um site ou app que já existe?",
    a: "Sim. Corrijo bugs e crio funcionalidades pequenas em projetos React e Supabase existentes. Primeiro eu leio o código e só depois falo de prazo e valor.",
  },
  {
    q: "O que acontece com os dados que eu enviar no formulário?",
    a: "Eles são usados só para responder ao seu contato. Está tudo explicado na política de privacidade, no fim da página.",
  },
];

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#topo" className="brand" aria-label="Seixas.dev, voltar ao topo">
            Seixas<span>.dev</span>
          </a>
          <nav aria-label="Principal">
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como trabalho</a>
            <a href="#projetos">Projetos</a>
            <a href="#faq">FAQ</a>
            <a href="#contato" className="btn small">
              Pedir orçamento
            </a>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">Enzo Seixas · Desenvolvedor web full stack</p>
            <h1>
              Sites e sistemas web <span className="hl">sob medida</span>, com React e Supabase.
            </h1>
            <p className="lead">
              Landing pages, painéis e backend com login e regras de segurança. Projetos de escopo
              fechado, com prazo e valor combinados antes de começar.
            </p>
            <div className="cta">
              <a href="#contato" className="btn">
                Pedir orçamento
              </a>
              <a href={REPO} className="btn ghost" target="_blank" rel="noopener noreferrer">
                Ver código no GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="marquee" aria-label="Tecnologias que eu uso">
            <ul className="track">
              {[...STACK, ...STACK].map((s, i) => (
                <li key={i} aria-hidden={i >= STACK.length}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="wrap">
            <p className="kicker">Serviços</p>
            <h2>O que eu faço</h2>
            <div className="grid">
              {SERVICES.map((p) => (
                <article key={p.title} className="card">
                  <span className="idx">{p.n}</span>
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

        <section id="processo" className="section light">
          <div className="wrap">
            <p className="kicker">Processo</p>
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

        <section id="projetos" className="section">
          <div className="wrap">
            <p className="kicker">Projetos</p>
            <h2>Trabalho público</h2>
            <div className="projects">
              <article className="project">
                <p className="tag">Portfólio</p>
                <h3>Esta landing page</h3>
                <p>
                  A página que você está vendo: React e TypeScript no front-end, formulário que
                  grava no Supabase com regras de acesso (RLS), validação no banco, política de
                  privacidade e cabeçalhos de segurança (CSP).
                </p>
                <ul className="chips">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Supabase</li>
                  <li>RLS</li>
                  <li>Vercel</li>
                </ul>
                <a href={REPO} className="btn" target="_blank" rel="noopener noreferrer">
                  Ver código <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="project next">
                <p className="tag">Próximo</p>
                <h3>O seu projeto pode ser o próximo</h3>
                <p>
                  Os sistemas em que já trabalhei são de clientes e não são públicos. Por isso,
                  aqui só mostro o que posso mostrar. Conte o que você precisa e eu respondo com
                  prazo e valor.
                </p>
                <a href="#contato" className="btn ghost">
                  Pedir orçamento
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section light">
          <div className="wrap narrow">
            <p className="kicker">Dúvidas</p>
            <h2>Perguntas frequentes</h2>
            <div className="faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="wrap narrow">
            <p className="kicker">Contato</p>
            <h2>Vamos conversar sobre o seu projeto</h2>
            <p className="lead small">
              Conte o que você precisa. Respondo com perguntas rápidas e uma estimativa de prazo e
              valor.
            </p>
            <ContactForm />
          </div>
        </section>

        <section id="privacidade" className="section dim">
          <div className="wrap narrow privacy">
            <h2>Política de privacidade</h2>
            <p>
              Esta página coleta apenas o que você digita no formulário de contato. Veja como
              esses dados são tratados, conforme a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <h3>Quem é o responsável</h3>
            <p>Enzo Seixas, responsável pelo tratamento dos dados enviados nesta página.</p>
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
        <div className="wrap foot-in">
          <p>© {YEAR} Enzo Seixas · Feito com React, TypeScript e Supabase</p>
          <p>
            <a href="#privacidade">Privacidade</a>
            <a href={REPO} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
