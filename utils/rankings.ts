import type { ResultData } from "../App";

export interface QuizRank {
  attempts: number;
  bestPercentage: number;
  averagePercentage: number;
  lastPercentage: number;
  totalCorrect: number;
  totalQuestions: number;
  totalScore: number;
}

export interface Rankings {
  overall: QuizRank;
  quizzes: Record<string, QuizRank>;
  updatedAt: string;
}

const STORAGE_KEY = "quiz-rankings";

const createEmptyRank = (): QuizRank => ({
  attempts: 0,
  bestPercentage: 0,
  averagePercentage: 0,
  lastPercentage: 0,
  totalCorrect: 0,
  totalQuestions: 0,
  totalScore: 0,
});

const createDefaultRankings = (): Rankings => ({
  overall: createEmptyRank(),
  quizzes: {},
  updatedAt: new Date().toISOString(),
});

const computePercentage = (correct: number, total: number) => (total > 0 ? Math.round((correct / total) * 100) : 0);

const buildUpdatedRank = (existing: QuizRank, correct: number, total: number): QuizRank => {
  const percentage = computePercentage(correct, total);
  const attempts = existing.attempts + 1;
  const totalScore = existing.totalScore + percentage;
  return {
    attempts,
    bestPercentage: Math.max(existing.bestPercentage, percentage),
    averagePercentage: Math.round(totalScore / attempts),
    lastPercentage: percentage,
    totalCorrect: existing.totalCorrect + correct,
    totalQuestions: existing.totalQuestions + total,
    totalScore,
  };
};

export const loadRankings = (): Rankings => {
  if (typeof window === "undefined") return createDefaultRankings();
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return createDefaultRankings();
  try {
    const parsed = JSON.parse(raw) as Rankings;
    if (!parsed || typeof parsed !== "object" || !parsed.overall || !parsed.quizzes) {
      return createDefaultRankings();
    }
    return parsed;
  } catch {
    return createDefaultRankings();
  }
};

export const saveRankings = (rankings: Rankings) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rankings));
};

export const addQuizResult = (data: ResultData): Rankings => {
  const current = loadRankings();
  const quizId = data.quizId;
  const updatedQuiz = buildUpdatedRank(current.quizzes[quizId] ?? createEmptyRank(), data.correct, data.total);
  const updatedOverall = buildUpdatedRank(current.overall, data.correct, data.total);

  const next: Rankings = {
    overall: updatedOverall,
    quizzes: {
      ...current.quizzes,
      [quizId]: updatedQuiz,
    },
    updatedAt: new Date().toISOString(),
  };

  saveRankings(next);
  return next;
};

export const getRankName = (percentage: number) => {
  if (percentage >= 90) return "Diamante";
  if (percentage >= 75) return "Ouro";
  if (percentage >= 60) return "Prata";
  if (percentage >= 45) return "Bronze";
  return "Iniciante";
};

export const getRankDescription = (percentage: number) => {
  if (percentage >= 90) return "Nível máximo. Excelente desempenho.";
  if (percentage >= 75) return "Desempenho muito bom. Continue assim.";
  if (percentage >= 60) return "Bom desempenho. Estude para subir mais.";
  if (percentage >= 45) return "Desempenho razoável. Treine mais.";
  return "Hora de estudar e refazer quizzes para melhorar.";
};
