import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { quizzes, quizTitles } from "../data/questions";
import { loadRankings, getRankName, type Rankings } from "../utils/rankings";
import sgciLogo from "../assets/SGCI.png";

interface StartScreenProps {
  rankings?: Rankings;
  selectedQuiz: string;
  onStart: (quizId?: string) => void;
  onOpenSelector?: () => void;
}

type SavedQuizProgress = {
  quizId: string;
  currentIndex: number;
  total: number;
  correct: number;
  answers: {
    question: string;
    isCorrect: boolean;
    userAnswer: string;
    correctAnswer: string;
  }[];
};

const STORAGE_KEY = "quiz-progress";

export function StartScreen({ rankings, selectedQuiz, onStart, onOpenSelector }: StartScreenProps) {
  const quizKeys = Object.keys(quizzes);
  const [selected, setSelected] = useState<string>(selectedQuiz ?? (quizKeys[0] ?? "telefonia"));
  const [selectedApostila, setSelectedApostila] = useState("apostila-1");
  const [savedProgress, setSavedProgress] = useState<SavedQuizProgress | null>(null);
  const totalQuestions = quizKeys.reduce((sum, k) => sum + (quizzes[k]?.length ?? 0), 0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as SavedQuizProgress;
      if (
        parsed?.quizId &&
        typeof parsed.currentIndex === "number" &&
        typeof parsed.total === "number" &&
        typeof parsed.correct === "number" &&
        Array.isArray(parsed.answers)
      ) {
        setSavedProgress(parsed);
      }
    } catch {
      // ignore invalid storage data
    }
  }, []);

  const formatLabel = (key: string) => {
    return key.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const apostilas = [
    {
      id: "apostila-1",
      label: "MANUTENÇÃO DOS SISTEMAS TELEFÔNICOS.pdf",
      url: new URL('../assets/manutencao-sistemas-telefonicos.pdf', import.meta.url).href,
    },
    {
      id: "apostila-2",
      label: "Eletronica Digital 2.pdf",
      url: new URL('../assets/eletronica-digital-2.pdf', import.meta.url).href,
    },
    {
      id: "apostila-3",
      label: "MANUTENÇÃO DOS SISTEMAS DE ODÔMETROS.pdf",
      url: new URL('../assets/Apostila EE-2112-0229 ODÔMETROS.pdf', import.meta.url).href,
    },
  ];
  const currentRankings = rankings ?? loadRankings();
  const overallRankName = getRankName(currentRankings.overall.averagePercentage);
  const quizRank = currentRankings.quizzes[selected] ?? null;
  const quizRankName = quizRank ? getRankName(quizRank.averagePercentage) : "Sem histórico";
  const selectedApostilaData = apostilas.find((apostila) => apostila.id === selectedApostila) ?? apostilas[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 bg-app"
      style={{ ['--bg-image' as any]: `url(${new URL('../assets/bg.jpg', import.meta.url).href})` }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: "spring" }}
        className="w-full max-w-md card rounded-3xl p-6"
      >
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-400/10 p-2">
            <img
              src={sgciLogo}
              alt="SGCI"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 text-center">
          QUIZ DO <span className="text-cyan-400">CI</span>
        </h1>

        <p className="text-slate-300 text-sm mb-6 text-center">
          Teste seus conhecimentos.
        </p>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-4 text-left">
            <p className="text-sm text-slate-400 mb-2">Ranking Geral</p>
            <p className="text-xl font-bold text-white">{overallRankName}</p>
            <p className="text-slate-300 text-sm mt-2">
              Média: {currentRankings.overall.averagePercentage}% • Melhor: {currentRankings.overall.bestPercentage}%
            </p>
            <p className="text-slate-300 text-sm">
              Tentativas: {currentRankings.overall.attempts}
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-4 text-left">
            <p className="text-sm text-slate-400 mb-2">Ranking do Quiz Selecionado</p>
            <p className="text-xl font-bold text-white">{quizRankName}</p>
            {quizRank ? (
              <>
                <p className="text-slate-300 text-sm mt-2">
                  Média: {quizRank.averagePercentage}% • Melhor: {quizRank.bestPercentage}%
                </p>
                <p className="text-slate-300 text-sm">Última: {quizRank.lastPercentage}%</p>
                <p className="text-slate-300 text-sm">Tentativas: {quizRank.attempts}</p>
              </>
            ) : (
              <p className="text-slate-400 text-sm mt-2">Faça o quiz para começar a pontuar.</p>
            )}
          </div>
        </div>

        <div className="mb-6 overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Tabela de Ranking por Quiz</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="text-slate-400 text-left border-b border-slate-700">
                <th className="py-2 pr-4">Quiz</th>
                <th className="py-2 pr-4">Rank</th>
                <th className="py-2 pr-4">Média</th>
                <th className="py-2 pr-4">Melhor</th>
                <th className="py-2 pr-4">Tentativas</th>
              </tr>
            </thead>
            <tbody>
              {quizKeys.map((key) => {
                const quizData = currentRankings.quizzes[key];
                const name = quizTitles[key] ?? key.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                const rankName = quizData ? getRankName(quizData.averagePercentage) : "Sem histórico";
                return (
                  <tr key={key} className={key === selectedQuiz ? "bg-slate-800" : "bg-slate-900"}>
                    <td className="py-3 pr-4 text-white">{name}</td>
                    <td className="py-3 pr-4 text-slate-300">{rankName}</td>
                    <td className="py-3 pr-4 text-slate-300">{quizData ? `${quizData.averagePercentage}%` : "-"}</td>
                    <td className="py-3 pr-4 text-slate-300">{quizData ? `${quizData.bestPercentage}%` : "-"}</td>
                    <td className="py-3 pr-4 text-slate-300">{quizData ? quizData.attempts : "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {savedProgress && (
          <div className="mb-4 rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-4 text-slate-200">
            <p className="text-sm font-semibold text-cyan-300">Progresso salvo encontrado</p>
            <p className="text-sm mt-1">
              Continue o quiz <span className="font-semibold">{savedProgress.quizId.replace(/[-_]/g, " ")}</span> na questão <span className="font-semibold">{savedProgress.currentIndex + 1}</span>.
            </p>
            <button
              onClick={() => onStart(savedProgress.quizId)}
              className="mt-3 w-full primary-btn rounded-xl py-3 text-sm font-bold"
            >
              Continuar onde parou
            </button>
          </div>
        )}

        <div className="mb-4">
          <div className="rounded-xl p-4 card text-center max-w-xs mx-auto">
            <p className="text-3xl font-bold text-cyan-400">{totalQuestions}</p>
            <p className="text-slate-300 text-sm">Total de Questões</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="rounded-xl p-4 card text-center max-w-md mx-auto">
            <p className="text-lg font-semibold text-white mb-2">Apostila para estudo</p>
            <p className="text-slate-300 text-sm mb-3">Escolha a apostila e abra ou baixe o PDF desejado.</p>
            <label htmlFor="apostila-select" className="block text-left text-sm text-slate-300 mb-2">
              Selecione a apostila
            </label>
            <select
              id="apostila-select"
              value={selectedApostila}
              onChange={(event) => setSelectedApostila(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            >
              {apostilas.map((apostila) => (
                <option key={apostila.id} value={apostila.id}>
                  {apostila.label}
                </option>
              ))}
            </select>
            <div className="flex gap-3 justify-center mt-3">
              <a
                href={selectedApostilaData.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg ghost-btn"
                aria-label="Abrir apostila em nova aba"
              >
                Abrir apostila
              </a>
              <a
                href={selectedApostilaData.url}
                download
                className="px-4 py-2 rounded-lg primary-btn"
                aria-label="Baixar apostila"
              >
                Baixar PDF
              </a>
            </div>
          </div>
        </div>

      

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => (onOpenSelector ? onOpenSelector() : onStart(selected))}
          className="w-full py-3 rounded-xl primary-btn font-bold text-center flex items-center justify-center gap-3"
        >
          <Play size={20} />
          Iniciar Quiz
        </motion.button>
        
      </motion.div>
    </motion.div>
  );
}
