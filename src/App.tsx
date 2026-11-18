import ContactForm from "./ContactForm";

const REPO = "https://github.com/Seixas-1/landing-portfolio";
const ASPM_REPO = "https://github.com/Seixas-1/aspm-com-ia";
const SECURAPY_REPO = "https://github.com/Seixas-1/securapy-platform-coding-security-fiap";
const YEAR = new Date().getFullYear();

const STACK = ["React", "TypeScript", "Vite", "Node.js", "Supabase", "PostgreSQL", "SQL", "RLS", "REST APIs", "QA", "Git"];

const CHECKLIST = [
  "RLS: o visitante só envia dados, nunca lê",
  "Validação no banco, não só na tela",
  "Cabeçalhos de segurança (CSP)",
  "Teste com a chave pública antes de entregar",
  "Relatório do que foi verificado",
];

const SKILLS = [
  {
    area: "Front-end",
    text: "Interfaces rápidas, responsivas e acessíveis.",
    chips: ["React", "TypeScript", "Vite", "HTML e CSS", "Formulários e validação"],
  },
  {
    area: "Back-end e dados",
    text: "Banco, login e APIs que sustentam o seu produto.",
    chips: ["Node.js", "PostgreSQL e SQL", "Supabase Auth", "Realtime e Storage", "Edge Functions", "APIs REST"],
  },
  {
    area: "QA e testes",
    text: "Achar o erro antes do seu cliente achar.",
    chips: ["Testes de sistema", "Validação de qualidade", "Reprodução de bugs", "Teste de fluxos"],
  },
  {
    area: "Segurança de aplicações",
    text: "Dados protegidos desde o desenho do app.",
    chips: ["RLS e permissões", "Validação no banco", "CSP e cabeçalhos", "2FA", "Revisão de riscos"],
  },
  {
    area: "IA e chatbots",
    text: "Protótipos de chat com IA prontos para validar a ideia.",
    chips: ["Chat com IA", "Painel administrativo", "Interface pública do chat"],
  },
];

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
  {
    n: "04",
    title: "Revisão de segurança de app Supabase",
    text: "App feito às pressas ou com ferramentas de IA? Eu reviso permissões e RLS, testo o que um visitante consegue ler ou alterar e entrego um relatório com os riscos por prioridade. Não é um pentest completo.",
    items: ["Revisão de RLS e permissões", "Teste com a chave pública", "Chaves e variáveis de ambiente", "Relatório priorizado"],
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
    q: "Você faz revisão de segurança?",
    a: "Faço revisão focada em apps React e Supabase: permissões, RLS, chaves e o que um visitante consegue ler ou alterar. É uma revisão com relatório, não um pentest completo e não substitui uma auditoria especializada.",
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
          <a href="#topo" className="brand" aria-label="Enzo Seixas, voltar ao topo">
            Enzo <span>Seixas</span>
          </a>
          <nav aria-label="Principal">
            <a href="#servicos">Serviços</a>
            <a href="#habilidades">Habilidades</a>
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
          <div className="wrap hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Enzo Seixas · Web, QA e segurança de aplicações</p>
              <h1>
                Sites e sistemas web <span className="hl">sob medida</span>, com React e Supabase.
              </h1>
              <p className="lead">
                Landing pages, painéis, backend com login e regras de segurança, testes e revisão
                de apps. Projetos de escopo fechado, com prazo e valor combinados antes de começar.
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
            <aside className="panel" aria-label="Checklist padrão de cada entrega">
              <p className="panel-title">Checklist padrão em cada entrega</p>
              <ul>
                {CHECKLIST.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="panel-foot">Escopo, prazo e valor combinados antes de começar.</p>
            </aside>
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

        <section id="habilidades" className="section dim">
          <div className="wrap">
            <p className="kicker">Habilidades</p>
            <h2>O que eu domino</h2>
            <div className="skills">
              {SKILLS.map((s) => (
                <article key={s.area} className="skill">
                  <h3>{s.area}</h3>
                  <p>{s.text}</p>
                  <ul className="chips">
                    {s.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <article className="skill more">
                <h3>Precisa de outra coisa?</h3>
                <p>
                  Me conta o que você precisa. Se não for a minha área, eu digo na hora, em vez de
                  prometer o que não entrego.
                </p>
                <a href="#contato" className="btn ghost small">
                  Falar comigo
                </a>
              </article>
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
                  <li>Cloudflare Pages</li>
                </ul>
                <a href={REPO} className="btn" target="_blank" rel="noopener noreferrer">
                  Ver código <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="project">
                <p className="tag">FIAP · Equipe de 5</p>
                <h3>ASPM com IA</h3>
                <p>
                  Plataforma que reúne os alertas de três scanners (Bandit, Trivy e OWASP ZAP),
                  normaliza tudo e usa 3 agentes de IA para dar nota de risco, explicar a falha e
                  sugerir a correção. Minha parte: o pipeline em Python, a API em FastAPI, a
                  interface web, o suporte a modelo local e o guia de instalação.
                </p>
                <ul className="chips">
                  <li>Python</li>
                  <li>FastAPI</li>
                  <li>Bandit</li>
                  <li>Trivy</li>
                  <li>OWASP ZAP</li>
                  <li>IA</li>
                </ul>
                <p className="fine">
                  Inclui um app vulnerável de propósito, só para os scanners terem o que achar.
                </p>
                <a href={ASPM_REPO} className="btn" target="_blank" rel="noopener noreferrer">
                  Ver código <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="project">
                <p className="tag">FIAP · Projeto acadêmico</p>
                <h3>SecuraPy, SIEM em Python</h3>
                <p>
                  Recebe logs de autenticação, firewall e web e detecta brute force, port scan e
                  IPs em lista de bloqueio. API REST em Flask com JWT, MongoDB e MySQL, 155 testes
                  automatizados e Docker. Minha parte: o núcleo do sistema e a persistência dos
                  dados.
                </p>
                <ul className="chips">
                  <li>Python</li>
                  <li>Flask</li>
                  <li>JWT</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>pytest</li>
                  <li>Docker</li>
                </ul>
                <a href={SECURAPY_REPO} className="btn" target="_blank" rel="noopener noreferrer">
                  Ver código <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="project next">
                <p className="tag">Próximo</p>
                <h3>O seu projeto pode ser o próximo</h3>
                <p>
                  Os sistemas de clientes em que já trabalhei não são públicos. Por isso, aqui só
                  mostro o que posso mostrar. Conte o que você precisa e eu respondo com prazo e
                  valor.
                </p>
                <a href="#contato" className="btn ghost">
                  Pedir orçamento
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section light">
          <div className="wrap split">
            <div className="head">
              <p className="kicker">Dúvidas</p>
              <h2>Perguntas frequentes</h2>
              <p className="side-note">
                Não achou a sua dúvida? Pergunte pelo <a href="#contato">formulário de contato</a>.
              </p>
            </div>
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
          <div className="wrap split">
            <div className="head">
              <p className="kicker">Contato</p>
              <h2>Vamos conversar sobre o seu projeto</h2>
              <p className="lead small">
                Conte o que você precisa. Respondo com perguntas rápidas e uma estimativa de prazo
                e valor.
              </p>
              <ul className="facts">
                <li>Escopo, prazo e valor combinados antes de começar</li>
                <li>Resposta em até 2 dias úteis</li>
                <li>Seus dados servem só para responder ao contato</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>

        <section id="privacidade" className="section dim">
          <div className="wrap split privacy">
            <div className="head">
              <h2>Política de privacidade</h2>
              <p className="side-note">
                Esta página coleta apenas o que você digita no formulário de contato. Veja como
                esses dados são tratados, conforme a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
            <div className="body">
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
