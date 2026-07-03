import { createClient } from "@supabase/supabase-js";

const url = (import.meta as any).env?.VITE_SUPABASE_URL as string | undefined;
const anonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

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

export default supabase;
