import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { quizzes } from "../data/questions";
import sgciLogo from "../assets/SGCI.png";

interface StartScreenProps {
  rankings?: any;
  selectedQuiz: string;
  onStart: (quizId?: string, playerName?: string) => void;
  onOpenSelector?: (playerName?: string) => void;
  onOpenRanking?: () => void;
  onOpenAdmin?: () => void;
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

export function StartScreen({ rankings, selectedQuiz, onStart, onOpenSelector, onOpenRanking, onOpenAdmin }: StartScreenProps) {
  const quizKeys = Object.keys(quizzes);
  const [selectedApostila, setSelectedApostila] = useState("apostila-1");
  const [savedProgress, setSavedProgress] = useState<SavedQuizProgress | null>(null);
  const [playerName, setPlayerName] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem("player-name") ?? "";
  });
  const hasName = playerName.trim().length > 0;
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
        className="w-full max-w-md card rounded-3xl p-4 sm:p-6"
      >
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="h-24 w-24 sm:h-28 sm:w-28 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 via-slate-900/60 to-emerald-400/10 border border-cyan-500/30 p-2 sm:p-2.5 shadow-[0_0_25px_rgba(0,229,255,0.15)]">
            <img
              src={sgciLogo}
              alt="SGCI"
              className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(0,229,255,0.25)]"
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 sm:mb-3 text-center tracking-tight">
          QUIZ DO <span className="text-cyan-400">CI</span>
        </h1>

        <p className="text-slate-300 text-xs sm:text-sm mb-5 text-center">
          Teste seus conhecimentos.
        </p>

        <div className="mb-5 grid grid-cols-2 gap-2.5 max-w-xs mx-auto">
          <button onClick={() => (onOpenRanking ? onOpenRanking() : undefined)} className="ghost-btn px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold">
            Ver Ranking
          </button>
          {onOpenAdmin && (
            <button onClick={onOpenAdmin} className="ghost-btn px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold opacity-90 hover:opacity-100 flex items-center justify-center gap-1.5" title="Modo Administração e Edição">
              ⚙️ Admin
            </button>
          )}
        </div>

        {/* Ranking moved to separate screen */}

        {savedProgress && (
          <div className="mb-4 rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-3.5 sm:p-4 text-slate-200">
            <p className="text-xs sm:text-sm font-semibold text-cyan-300">Progresso salvo encontrado</p>
            <p className="text-xs sm:text-sm mt-1">
              Continue o quiz <span className="font-semibold">{savedProgress.quizId.replace(/[-_]/g, " ")}</span> na questão <span className="font-semibold">{savedProgress.currentIndex + 1}</span>.
            </p>
            <button
              onClick={() => onStart(savedProgress.quizId, playerName)}
              disabled={!hasName}
              className={`mt-3 w-full rounded-xl py-3 text-xs sm:text-sm font-bold transition ${hasName ? "primary-btn" : "bg-slate-600 text-slate-300 cursor-not-allowed"}`}
            >
              Continuar onde parou
            </button>
            {!hasName && (
              <p className="text-[11px] text-rose-400 mt-2">Digite seu nome para continuar e aparecer no ranking.</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-xs sm:text-sm text-slate-300 mb-1.5">Seu nome (aparecerá no ranking)</label>
          <input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div className="mb-4">
          <div className="rounded-xl p-3.5 sm:p-4 card text-center max-w-xs mx-auto">
            <p className="text-2xl sm:text-3xl font-bold text-cyan-400">{totalQuestions}</p>
            <p className="text-slate-300 text-xs sm:text-sm">Total de Questões</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="rounded-2xl p-3.5 sm:p-4 bg-slate-900/60 border border-slate-800 text-center max-w-md mx-auto">
            <p className="text-base sm:text-lg font-semibold text-white mb-1">Apostila para estudo</p>
            <p className="text-slate-300 text-xs sm:text-sm mb-3">Escolha a apostila e abra ou baixe o PDF desejado.</p>
            <label htmlFor="apostila-select" className="block text-left text-xs sm:text-sm text-slate-300 mb-1.5">
              Selecione a apostila
            </label>
            <select
              id="apostila-select"
              value={selectedApostila}
              onChange={(event) => setSelectedApostila(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs sm:text-sm text-white outline-none focus:border-cyan-400"
            >
              {apostilas.map((apostila) => (
                <option key={apostila.id} value={apostila.id}>
                  {apostila.label}
                </option>
              ))}
            </select>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <a
                href={selectedApostilaData.url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2.5 rounded-xl ghost-btn text-xs sm:text-sm text-center flex items-center justify-center font-semibold"
                aria-label="Abrir apostila em nova aba"
              >
                Abrir apostila
              </a>
              <a
                href={selectedApostilaData.url}
                download
                className="px-3 py-2.5 rounded-xl primary-btn text-xs sm:text-sm text-center flex items-center justify-center font-semibold"
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
          onClick={() => onOpenSelector ? onOpenSelector(playerName) : onStart(selectedQuiz, playerName)}
          disabled={!hasName}
          className={`w-full py-3 rounded-xl font-bold text-center flex items-center justify-center gap-3 transition ${hasName ? "primary-btn" : "bg-slate-600 text-slate-300 cursor-not-allowed"}`}
        >
          <Play size={20} />
          Iniciar Quiz
        </motion.button>
        {!hasName && (
          <p className="text-xs text-rose-400 mt-2 text-center">Digite seu nome para aparecer no ranking.</p>
        )}
        
      </motion.div>
    </motion.div>
  );
}
