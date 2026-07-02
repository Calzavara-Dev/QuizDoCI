import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { quizzes, quizTitles } from "../data/questions";
import sgciLogo from "../assets/SGCI.png";

interface StartScreenProps {
  rankings?: any;
  selectedQuiz: string;
  onStart: (quizId?: string, playerName?: string) => void;
  onOpenSelector?: () => void;
  onOpenRanking?: () => void;
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

export function StartScreen({ rankings, selectedQuiz, onStart, onOpenSelector, onOpenRanking }: StartScreenProps) {
  const quizKeys = Object.keys(quizzes);
  const [selected, setSelected] = useState<string>(selectedQuiz ?? (quizKeys[0] ?? "telefonia"));
  const [selectedApostila, setSelectedApostila] = useState("apostila-1");
  const [savedProgress, setSavedProgress] = useState<SavedQuizProgress | null>(null);
  const [playerName, setPlayerName] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem("player-name") ?? "";
  });
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("player-name", playerName);
  }, [playerName]);

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
  // rankings moved to separate screen; StartScreen keeps minimal state
  const currentRankings = rankings ?? null;
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

        <div className="mb-6 flex justify-center">
          <button onClick={() => (onOpenRanking ? onOpenRanking() : undefined)} className="ghost-btn px-4 py-2 rounded-lg">
            Ver Ranking
          </button>
        </div>

        {/* Ranking moved to separate screen */}

        {savedProgress && (
          <div className="mb-4 rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-4 text-slate-200">
            <p className="text-sm font-semibold text-cyan-300">Progresso salvo encontrado</p>
            <p className="text-sm mt-1">
              Continue o quiz <span className="font-semibold">{savedProgress.quizId.replace(/[-_]/g, " ")}</span> na questão <span className="font-semibold">{savedProgress.currentIndex + 1}</span>.
            </p>
            <button
              onClick={() => onStart(savedProgress.quizId, playerName)}
              className="mt-3 w-full primary-btn rounded-xl py-3 text-sm font-bold"
            >
              Continuar onde parou
            </button>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm text-slate-300 mb-2">Seu nome (aparecerá no ranking)</label>
          <input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
          />
        </div>

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
          onClick={() => (onOpenSelector ? onOpenSelector() : onStart(selected, playerName))}
          className="w-full py-3 rounded-xl primary-btn font-bold text-center flex items-center justify-center gap-3"
        >
          <Play size={20} />
          Iniciar Quiz
        </motion.button>
        
      </motion.div>
    </motion.div>
  );
}
