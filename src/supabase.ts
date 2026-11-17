import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Sem as variáveis de ambiente a página continua funcionando em "modo demo":
// o formulário valida, mas avisa que o banco não está conectado.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
