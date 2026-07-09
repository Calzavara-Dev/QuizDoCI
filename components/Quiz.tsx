import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, RotateCcw, ChevronLeft, ZoomIn } from "lucide-react";
import { quizTitles } from "../data/questions";
import { getDynamicShuffledQuestions } from "../utils/questionLoader";
import type { ResultData } from "../App";
import type { Question } from "../types/question";
import { ConfirmModal } from "./ConfirmModal";

const STORAGE_KEY = "quiz-progress";

type SavedQuizProgress = {
  quizId: string;
  currentIndex: number;
  correct: number;
  answers: ResultData["answers"];
  shuffledQuestions: Question[];
};

const loadSavedProgress = (quizId: string): SavedQuizProgress | null => {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as SavedQuizProgress;
    if (parsed.quizId !== quizId) return null;
    if (!Array.isArray(parsed.shuffledQuestions)) return null;
    return parsed;
  } catch {
    return null;
  }
};

const saveProgress = (progress: SavedQuizProgress) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

const clearProgress = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
};

interface QuizProps {
  onFinish: (data: ResultData) => void;
  quizId?: string;
  onBackToStart?: () => void;
}

export function Quiz({ onFinish, quizId = "telefonia", onBackToStart }: QuizProps) {
  const savedProgress = useMemo(() => loadSavedProgress(quizId), [quizId]);
  const [shuffledQuestions] = useState<Question[]>(() => {
    const questions = savedProgress?.shuffledQuestions ?? getDynamicShuffledQuestions(quizId);
    return Array.isArray(questions) ? questions : [];
  });
  const [currentIndex, setCurrentIndex] = useState(() => {
    const index = savedProgress?.currentIndex ?? 0;
    return typeof index === "number" && index >= 0 && index < shuffledQuestions.length ? index : 0;
  });
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(() => {
    if (!shuffledQuestions.length || !savedProgress?.answers) return null;
    const answer = savedProgress.answers[savedProgress.currentIndex];
    return answer?.userAnswer ?? null;
  });
  const [showResult, setShowResult] = useState<boolean>(() => {
    if (!shuffledQuestions.length || !savedProgress?.answers) return false;
    return Boolean(savedProgress.answers[savedProgress.currentIndex]);
  });
  const [correct, setCorrect] = useState(savedProgress?.correct ?? 0);
  const [answers, setAnswers] = useState<ResultData["answers"]>(savedProgress?.answers ?? []);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const currentQuestion = shuffledQuestions[currentIndex];
  const progress = shuffledQuestions.length ? ((currentIndex + 1) / shuffledQuestions.length) * 100 : 0;

  useEffect(() => {
    if (!shuffledQuestions.length) {
      setCurrentIndex(0);
      return;
    }
    if (currentIndex >= shuffledQuestions.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, shuffledQuestions.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showResult && (e.key === "Enter" || e.key === " ")) {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showResult]);

  useEffect(() => {
    const timer = setTimeout(() => {
      saveProgress({
        quizId,
        currentIndex,
        correct,
        answers,
        shuffledQuestions,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [quizId, currentIndex, correct, answers, shuffledQuestions]);

  useEffect(() => {
    const savedAnswer = answers[currentIndex];
    if (savedAnswer) {
      setSelectedAnswer(savedAnswer.userAnswer);
      setShowResult(true);
    } else {
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentIndex, answers]);

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);

    const isCorrect = answer === currentQuestion.answer;
    const existingAnswer = answers[currentIndex];

    setCorrect((prev) => {
      const previousScore = existingAnswer?.isCorrect ? 1 : 0;
      const newScore = isCorrect ? 1 : 0;
      return prev - previousScore + newScore;
    });

    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = {
        question: currentQuestion.question,
        isCorrect,
        userAnswer: answer,
        correctAnswer: currentQuestion.answer,
      };
      return next;
    });
  };

  const handlePrevious = () => {
    if (currentIndex === 0) return;
    const previousIndex = currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  const handleNext = () => {
    if (currentIndex === shuffledQuestions.length - 1) {
      clearProgress();
      onFinish({
        correct,
        total: shuffledQuestions.length,
        answers,
      });
    } else {
      setCurrentIndex((c) => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleExitQuiz = () => {
    setShowConfirm(false);
    onBackToStart && onBackToStart();
  };

  const handleRestartQuiz = () => {
    clearProgress();
    const fresh = getDynamicShuffledQuestions(quizId);
    setCurrentIndex(0);
    setCorrect(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowRestartConfirm(false);
    // Force the question list to update by mutating via ref trick isn't needed:
    // shuffledQuestions is a useState initialised once, so we replace its contents in-place
    shuffledQuestions.splice(0, shuffledQuestions.length, ...fresh);
  };

  return (
    <div className="min-h-screen flex flex-col p-3 sm:p-4 md:p-6 bg-app">

      {/* ── UNIFIED PREMIUM NAV + PROGRESS HEADER ── */}
      <div className="w-full max-w-3xl mx-auto mb-4 sm:mb-6">
        <div className="card rounded-2xl border border-slate-700/80 p-3 sm:p-4 shadow-xl overflow-hidden">

          {/* Row 1: actions + quiz title (desktop center) */}
          <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4 w-full">

            {/* Left: back to home */}
            <button
              onClick={() => setShowConfirm(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-all shrink-0"
            >
              <ChevronLeft size={15} />
              <span className="hidden sm:inline">Início</span>
            </button>

            {/* Centre: quiz name (Desktop only) */}
            <div className="hidden sm:block flex-1 text-center px-2 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Módulo</p>
              <h2 className="text-sm md:text-base font-extrabold text-white truncate">
                {quizTitles[quizId] ?? quizId.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </h2>
            </div>

            {/* Right: restart + previous */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setShowRestartConfirm(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 text-xs font-semibold transition-all"
                title="Reiniciar quiz do zero"
              >
                <RotateCcw size={14} />
                <span className="hidden sm:inline">Reiniciar</span>
              </button>

              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                title="Questão anterior"
              >
                <ChevronLeft size={14} />
                <span className="hidden sm:inline">Anterior</span>
              </button>
            </div>
          </div>

          {/* Mobile Quiz Title Row (Mobile only) */}
          <div className="block sm:hidden text-center mb-3 px-1">
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Módulo</p>
            <h2 className="text-xs font-extrabold text-white leading-snug break-words">
              {quizTitles[quizId] ?? quizId.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </h2>
          </div>

          {/* Row 2: stat chips */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 sm:flex sm:flex-wrap sm:justify-start items-center mb-3">
            {/* Question counter */}
            <div className="flex items-center justify-center sm:justify-start gap-0.5 sm:gap-1 bg-slate-900/80 rounded-xl px-1.5 py-1.5 sm:px-3 sm:py-2 border border-slate-800 text-center overflow-hidden">
              <span className="text-[9px] sm:text-xs text-slate-400 font-semibold hidden xs:inline">Q.</span>
              <span className="font-black text-white text-[11px] sm:text-sm tabular-nums">{currentIndex + 1}</span>
              <span className="text-slate-600 text-[10px]">/</span>
              <span className="text-slate-400 text-[11px] sm:text-sm tabular-nums">{shuffledQuestions.length}</span>
            </div>

            {/* Correct chip */}
            <div className="flex items-center justify-center sm:justify-start gap-1 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-1.5 py-1.5 sm:px-3 sm:py-2 overflow-hidden">
              <Check size={11} className="text-emerald-400 shrink-0 hidden xs:block" />
              <span className="text-emerald-300 text-[11px] sm:text-sm font-black tabular-nums">{correct}</span>
              <span className="text-emerald-600 text-[9px] sm:text-xs hidden sm:inline">certas</span>
            </div>

            {/* Wrong chip */}
            <div className="flex items-center justify-center sm:justify-start gap-1 bg-rose-500/10 border border-rose-500/25 rounded-xl px-1.5 py-1.5 sm:px-3 sm:py-2 overflow-hidden">
              <X size={11} className="text-rose-400 shrink-0 hidden xs:block" />
              <span className="text-rose-300 text-[11px] sm:text-sm font-black tabular-nums">
                {answers.filter(Boolean).filter(a => !a.isCorrect).length}
              </span>
              <span className="text-rose-600 text-[9px] sm:text-xs hidden sm:inline">erradas</span>
            </div>

            {/* Percentage chip */}
            <div className="flex items-center justify-center sm:justify-start gap-1 bg-cyan-500/10 border border-cyan-500/25 rounded-xl px-1.5 py-1.5 sm:px-3 sm:py-2 overflow-hidden">
              <span className="text-cyan-300 text-[11px] sm:text-sm font-black tabular-nums">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Row 3: animated gradient progress bar */}
          <div className="h-2 sm:h-2.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <ConfirmModal
        open={showConfirm}
        title="Voltar ao Início"
        message="Tem certeza que deseja voltar ao início? Seu progresso atual será salvo e você poderá retomar depois."
        onConfirm={handleExitQuiz}
        onCancel={() => setShowConfirm(false)}
      />
      <ConfirmModal
        open={showRestartConfirm}
        title="Reiniciar Quiz"
        message="Tem certeza que deseja reiniciar este quiz do zero? Seu progresso atual será perdido e as questões serão embaralhadas novamente."
        onConfirm={handleRestartQuiz}
        onCancel={() => setShowRestartConfirm(false)}
      />

      {/* Modal de ampliação de figura */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[92vh] flex flex-col items-center bg-slate-900 border border-slate-700 rounded-2xl p-2 sm:p-4 shadow-2xl"
            >
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute -top-3 -right-3 sm:top-3 sm:right-3 p-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-lg z-10"
                title="Fechar ampliação"
              >
                <X size={18} />
              </button>
              <div className="overflow-auto max-h-[82vh] flex items-center justify-center p-2">
                <img
                  src={zoomedImage}
                  alt="Figura ampliada"
                  className="max-w-full max-h-[78vh] object-contain rounded-xl"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium flex items-center gap-1.5">
                <span>Clique na tela ou no X para fechar</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.28 }}
            className="card rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700 flex-1 flex flex-col justify-between"
          >
            <div>
              {currentQuestion.topic && (
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-slate-400">
                    {currentQuestion.topic.replace(/\s*\[.*\]/, '').trim()}
                  </span>
                  {currentQuestion.topic.includes('[Questão Direta]') && (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm">
                      ⚡ Questão Direta
                    </span>
                  )}
                  {currentQuestion.topic.includes('[Questão Discursiva]') && (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm">
                      📝 Questão Discursiva
                    </span>
                  )}
                  {currentQuestion.topic.includes('[Múltipla Escolha]') && (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm">
                      ✓ Múltipla Escolha
                    </span>
                  )}
                </div>
              )}
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6 leading-relaxed">
                {currentQuestion.question}
              </h2>

              {currentQuestion.image && (
                <div 
                  onClick={() => setZoomedImage(currentQuestion.image || null)}
                  className="mb-4 sm:mb-6 rounded-2xl border border-slate-700 bg-slate-900/70 p-1 md:p-2 max-w-[380px] mx-auto cursor-pointer group relative overflow-hidden transition-all hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.18)]"
                  title="Clique para ampliar a figura"
                >
                  <img
                    src={currentQuestion.image}
                    alt={`Figura relacionada à pergunta ${currentIndex + 1}`}
                    className="w-full h-auto max-h-56 sm:max-h-80 object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-lg backdrop-blur-sm">
                      <ZoomIn size={14} />
                      Clique para ampliar
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-2.5 sm:space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = currentQuestion.answer === option;
                  
                  let buttonStyle = "bg-slate-700 border-slate-600 hover:border-cyan-500 text-white";
                  
                  if (showResult) {
                    if (isCorrectAnswer) {
                      buttonStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300";
                    } else if (isSelected && !isCorrectAnswer) {
                      buttonStyle = "bg-red-500/20 border-red-500 text-red-300";
                    } else {
                      buttonStyle = "bg-slate-700/50 border-slate-600 text-slate-500";
                    }
                  }

                  return (
                    <motion.button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={showResult}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={`w-full text-left p-3 sm:p-3.5 rounded-xl border-2 transition-all duration-200 text-xs sm:text-sm md:text-base leading-snug break-words ${buttonStyle}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex-1">{option}</span>
                        {showResult && isCorrectAnswer && (
                          <Check className="text-emerald-400 shrink-0" size={18} />
                        )}
                        {showResult && isSelected && !isCorrectAnswer && (
                          <X className="text-red-400 shrink-0" size={18} />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <div className={`p-4 rounded-xl ${
                  selectedAnswer === currentQuestion.answer
                    ? "bg-emerald-500/10 border border-emerald-500/30"
                    : "bg-amber-500/10 border border-amber-500/30"
                }`}>
                  <p className="text-sm font-medium mb-1">
                    {selectedAnswer === currentQuestion.answer ? "Correto!" : "Resposta correta:"}
                  </p>
                  <p className="text-slate-300">{currentQuestion.answer}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  className="mt-5 w-full primary-btn font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {currentIndex === shuffledQuestions.length - 1 ? "Ver Resultados" : "Próxima Questão"}
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}