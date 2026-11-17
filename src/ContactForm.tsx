import { useState, type FormEvent } from "react";
import { supabase } from "./supabase";

type Status = "idle" | "sending" | "sent" | "error" | "demo";

const SERVICES = [
  "Landing page",
  "Backend com Supabase",
  "Correção de bugs / nova funcionalidade",
  "Outro",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Campo isca: robôs preenchem, pessoas não veem.
    if (data.get("website")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) return fail("Informe seu nome.");
    if (!EMAIL_RE.test(email)) return fail("Informe um e-mail válido.");
    if (message.length < 10) return fail("Conte um pouco mais sobre o projeto (mín. 10 caracteres).");

    if (!supabase) {
      setStatus("demo");
      return;
    }

    setStatus("sending");
    setError("");
    const { error: dbError } = await supabase
      .from("contacts")
      .insert({ name, email, service, message });

    if (dbError) {
      setError("Não consegui enviar agora. Tente de novo em instantes.");
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("sent");
  }

  function fail(msg: string) {
    setError(msg);
    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div className="notice ok" role="status">
        <strong>Mensagem enviada!</strong> Respondo em até 2 dias úteis.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="form">
      <div className="field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" autoComplete="name" maxLength={100} required />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={200} required />
      </div>
      <div className="field">
        <label htmlFor="service">O que você precisa?</label>
        <select id="service" name="service" defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Conte sobre o projeto</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} required />
      </div>

      <p className="consent">
        Ao enviar, você concorda que eu use seu nome, e-mail e mensagem para responder ao seu
        contato. Saiba mais na <a href="#privacidade">política de privacidade</a>.
      </p>

      <div className="trap" aria-hidden="true">
        <label htmlFor="website">Não preencha</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="notice err" role="alert">
          {error}
        </p>
      )}
      {status === "demo" && (
        <p className="notice info" role="status">
          Modo demonstração: o formulário está válido, mas o Supabase ainda não foi conectado
          (veja o README).
        </p>
      )}

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
