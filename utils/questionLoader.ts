import { quizzes as staticQuizzes } from "../data/questions";
import type { Question } from "../types/question";
import { fetchRemoteQuestions } from "./supabase";

const LOCAL_CACHE_KEY = "quizdoCI_cached_quizzes";

/**
 * Retorna as questões do cache local (ou fallback nativo estático) de forma síncrona.
 * Ideal para renderização instantânea sem espera de rede.
 */
function enrichWithTags(data: Record<string, Question[]>): Record<string, Question[]> {
  const result: Record<string, Question[]> = {};
  for (const modKey of Object.keys(data)) {
    const list = data[modKey];
    const staticList = staticQuizzes[modKey] || [];
    if (Array.isArray(list)) {
      result[modKey] = list.map((q, idx) => {
        return {
          ...q,
          image: q.image || (staticQ ? staticQ.image : undefined),
        };
      });
    } else {
      result[modKey] = list;
    }
  }
  return result;
}

function mergeWithStatic(data: Record<string, Question[]>): Record<string, Question[]> {
  const result: Record<string, Question[]> = {};
  const allKeys = new Set([...Object.keys(staticQuizzes), ...Object.keys(data || {})]);

  for (const modKey of allKeys) {
    const staticList = staticQuizzes[modKey] || [];
    const dynamicList = data[modKey] || [];

    if (!Array.isArray(staticList) && !Array.isArray(dynamicList)) {
      result[modKey] = [];
      continue;
    }

    const mergedList: Question[] = [...staticList];
    const existingSet = new Set(staticList.map((q) => q.question.trim().toLowerCase()));

    if (Array.isArray(dynamicList)) {
      for (const dq of dynamicList) {
        const normalized = dq.question?.trim().toLowerCase();
        if (normalized && !existingSet.has(normalized)) {
          mergedList.push(dq);
          existingSet.add(normalized);
        }
      }
    }

    result[modKey] = mergedList;
  }

  return enrichWithTags(result);
}

function getExactStaticMerged(data?: Record<string, Question[]>): Record<string, Question[]> {
  const result: Record<string, Question[]> = data && typeof data === "object" ? { ...data } : {};
  for (const staticKey of Object.keys(staticQuizzes)) {
    result[staticKey] = staticQuizzes[staticKey];
  }
  return enrichWithTags(result);
}

export function getQuizzesSync(): Record<string, Question[]> {
  try {
    const cached = localStorage.getItem(LOCAL_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
        const clean = getExactStaticMerged(parsed);
        saveQuizzesToLocalCache(clean);
        return clean;
      }
    }
  } catch (err) {
    console.warn("Erro ao ler cache local de questões:", err);
  }
  return enrichWithTags(staticQuizzes);
}

export function saveQuizzesToLocalCache(data: Record<string, Question[]>): void {
  try {
    localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn("Erro ao salvar cache local de questões:", err);
  }
}

export async function loadAndSyncQuizzesRemote(): Promise<Record<string, Question[]>> {
  try {
    const remoteData = await fetchRemoteQuestions();
    if (remoteData && Object.keys(remoteData).length > 0) {
      const clean = getExactStaticMerged(remoteData);
      saveQuizzesToLocalCache(clean);
      return clean;
    }
  } catch (err) {
    console.warn("Sem conexão ao carregar questões remotas, usando cache:", err);
  }
  return getQuizzesSync();
}

/**
 * Retorna as questões de um módulo embaralhadas (utilizando o cache local/remoto sincronizado)
 */
export function getDynamicShuffledQuestions(quizId = "telefonia"): Question[] {
  const allQuizzes = getQuizzesSync();
  const rawQuestions = allQuizzes[quizId] ?? staticQuizzes[quizId] ?? staticQuizzes[Object.keys(staticQuizzes)[0]];

  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const processed = rawQuestions.map((q) => {
    const shuffledOptions = shuffleArray(q.options);
    return {
      ...q,
      options: shuffledOptions,
    };
  });

  return shuffleArray(processed);
}

