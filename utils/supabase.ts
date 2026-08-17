import { createClient } from "@supabase/supabase-js";
import type { Question } from "../types/question";

// Valores fornecidos pelo usuário (usados como fallback quando não há variáveis de ambiente)
const DEFAULT_SUPABASE_URL = "https://qyclxcadhpiujkyrsaea.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_A02szgHQXvmDyinrPP1wHg_s5aanlvD";

const url = ((import.meta as any).env?.VITE_SUPABASE_URL as string | undefined) ?? DEFAULT_SUPABASE_URL;
const anonKey = ((import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string | undefined) ?? DEFAULT_SUPABASE_ANON_KEY;

export const supabase = createClient(url, anonKey);

export const saveResultRemote = async (payload: {
  name: string;
  quiz_id: string;
  correct: number;
  total: number;
  percentage: number;
}) => {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from("quiz_results").insert([payload]);
    if (error) throw error;
    return data;
  } catch (err) {
    console.warn("Supabase save error", err);
    return null;
  }
};

export const fetchRemoteResults = async (limit = 100) => {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("quiz_results")
        .select("name,quiz_id,correct,total,percentage,created_at")
        .order("percentage", { ascending: false })
        .limit(limit);
      if (error) throw error;
      return data as any[];
    }

    // Fallback: try PostgREST endpoint directly using anon key (useful when import.meta.env isn't available at runtime)
    if (url && anonKey) {
      try {
        const qs = new URLSearchParams({ select: "name,quiz_id,correct,total,percentage,created_at", order: "percentage.desc", limit: String(limit) });
        const endpoint = `${url.replace(/\/$/, "")}/rest/v1/quiz_results?${qs.toString()}`;
        const res = await fetch(endpoint, {
          headers: {
            apikey: anonKey,
            Authorization: `Bearer ${anonKey}`,
            Accept: "application/json",
          },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // PostgREST returns an array of rows
        return data as any[];
      } catch (err) {
        console.warn("Supabase REST fallback error", err);
        return null;
      }
    }

    return null;
  } catch (err) {
    console.warn("Supabase fetch error", err);
    return null;
  }
};

export const fetchRemoteQuestions = async (quizId?: string): Promise<Record<string, Question[]> | null> => {
  try {
    if (supabase) {
      let query = supabase.from("quiz_questions").select("*");
      if (quizId) {
        query = query.eq("quiz_id", quizId);
      }
      const { data, error } = await query;
      if (error) throw error;
      if (!data || data.length === 0) return null;

      const grouped: Record<string, Question[]> = {};
      for (const row of data) {
        const qId = row.quiz_id as string;
        if (!grouped[qId]) grouped[qId] = [];
        let parsedOptions = row.options;
        if (typeof parsedOptions === "string") {
          try {
            parsedOptions = JSON.parse(parsedOptions);
          } catch (e) {
            parsedOptions = [row.options];
          }
        }
        grouped[qId].push({
          question: row.question,
          options: Array.isArray(parsedOptions) ? parsedOptions : [],
          answer: row.answer,
          image: row.image || undefined,
        });
      }
      return grouped;
    }
    return null;
  } catch (err) {
    console.warn("Supabase fetchRemoteQuestions error:", err);
    return null;
  }
};

export const saveRemoteQuestions = async (quizId: string, questions: Question[]): Promise<boolean> => {
  try {
    if (!supabase) return false;
    // Remove registros anteriores desse quiz_id para manter sincronizado com a lista atual
    await supabase.from("quiz_questions").delete().eq("quiz_id", quizId);

    const rowsFull = questions.map((q) => ({
      quiz_id: quizId,
      question: q.question,
      options: q.options,
      answer: q.answer,
      image: q.image || null,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await supabase.from("quiz_questions").insert(rowsFull);
    if (error) {
      console.warn("Aviso na inserção completa (tentando fallback sem image):", error.message);
      const rowsBasic = questions.map((q) => ({
        quiz_id: quizId,
        question: q.question,
        options: q.options,
        answer: q.answer,
        updated_at: new Date().toISOString(),
      }));
      const { error: errorBasic } = await supabase.from("quiz_questions").insert(rowsBasic);
      if (errorBasic) throw errorBasic;
    }
    return true;
  } catch (err) {
    console.warn("Supabase saveRemoteQuestions error:", err);
    return false;
  }
};

export default supabase;

// Expose a test helper in the browser to call saveResultRemote from the UI context.
// Usage in browser console: window.__testSaveResult({ name: 'X', quiz_id: 'Y', correct: 1, total: 2, percentage: 50 })
try {
  if (typeof window !== "undefined") {
    (window as any).__testSaveResult = async (payload: any) => {
      try {
        // Basic validation logging
        console.debug("__testSaveResult:payload", payload);
        const res = await saveResultRemote(payload as any);
        console.debug("__testSaveResult:response", res);
        return { ok: true, data: res };
      } catch (err) {
        console.error("__testSaveResult:error", err);
        return { ok: false, error: String(err) };
      }
    };
  }
} catch (e) {
  // ignore in non-browser environments
}
