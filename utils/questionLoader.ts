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
        const staticQ = staticList[idx];
        let topic = q.topic || (staticQ ? staticQ.topic : undefined);
        if (topic && !topic.includes("[")) {
          if (staticQ && staticQ.topic && staticQ.topic.includes("[")) {
            topic = staticQ.topic;
          }
        }
        return {
          ...q,
          topic,
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

export function getQuizzesSync(): Record<string, Question[]> {
  try {
    const cached = localStorage.getItem(LOCAL_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
        const merged = mergeWithStatic(parsed);
        saveQuizzesToLocalCache(merged);
        return merged;
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
      const merged = mergeWithStatic(remoteData);
      saveQuizzesToLocalCache(merged);
      return merged;
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

  function inferTopicFromText(text: string): string | undefined {
    const t = text.toLowerCase();
    if (t.includes("ttl") || t.includes("74") || t.includes("54")) return "Tópico: 1.4 - Família TTL";
    if (t.includes("cmos") || t.includes("4000") || t.includes("vdd")) return "Tópico: 1.5 - Família CMOS";
    if (t.includes("fan-out") || t.includes("fan out") || t.includes("fanout")) return "Tópico: 1.1 - Conceitos e parâmetros (Fan-Out)";
    if (t.includes("vih") || t.includes("vil") || t.includes("nível alto") || t.includes("nível baixo")) return "Tópico: 1.4 - Níveis de entrada/saída (VIH/VIL)";
    if (t.includes("dtmf") || t.includes("dual tone")) return "Tópico: DTMF";
    if (t.includes("voip") || t.includes("codec") || t.includes("jitter") || t.includes("latência")) return "Tópico: VoIP / CODECs";
    if (t.includes("matriz") || t.includes("produtos canônicos")) return "Tópico: Geração de produtos canônicos / Matrizes";
    if (t.includes("mux") || t.includes("multiplexador") || t.includes("demultiplex")) return "Tópico: Multiplex / Mux";
    if (t.includes("porta") || t.includes("nand") || t.includes("nor") || t.includes("and") || t.includes("or")) return "Tópico: Portas Lógicas";
    if (t.includes("temperatura") || t.includes("graus")) return "Tópico: Faixas de temperatura / Séries";
    return undefined;
  }

  const processed = rawQuestions.map((q) => {
    const shuffledOptions = shuffleArray(q.options);
    return {
      ...q,
      options: shuffledOptions,
      topic: q.topic ?? inferTopicFromText(q.question),
    };
  });

  return shuffleArray(processed);
}

