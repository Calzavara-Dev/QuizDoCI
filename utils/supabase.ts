import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

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
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("quiz_results")
      .select("name,quiz_id,correct,total,percentage,created_at")
      .order("percentage", { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data as any[];
  } catch (err) {
    console.warn("Supabase fetch error", err);
    return null;
  }
};

export default supabase;
