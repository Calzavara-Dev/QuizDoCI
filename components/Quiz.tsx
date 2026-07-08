import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, RotateCcw, ChevronLeft } from "lucide-react";
import { getShuffledQuestions, quizTitles } from "../data/questions";
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
    const questions = savedProgress?.shuffledQuestions ?? getShuffledQuestions(quizId);
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
    const fresh = getShuffledQuestions(quizId);
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
    <div className="min-h-screen flex flex-col p-4 md:p-6 bg-app">

      {/* ── UNIFIED PREMIUM NAV + PROGRESS HEADER ── */}
      <div className="w-full max-w-3xl mx-auto mb-6">
        <div className="card rounded-2xl border border-slate-700/80 p-4 shadow-xl">

          {/* Row 1: actions + quiz title */}
          <div className="flex items-center justify-between gap-2 mb-4">

            {/* Left: back to home */}
            <button
              onClick={() => setShowConfirm(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-all shrink-0"
            >
              <ChevronLeft size={15} />
              <span className="hidden sm:inline">Início</span>
            </button>

            {/* Centre: quiz name */}
            <div className="flex-1 text-center px-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-0.5">Módulo</p>
              <h2 className="text-sm md:text-base font-extrabold text-white truncate">
                {quizTitles[quizId] ?? quizId.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </h2>
            </div>

            {/* Right: restart + previous */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowRestartConfirm(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 text-xs font-semibold transition-all"
                title="Reiniciar quiz do zero"
              >
                <RotateCcw size={14} />
                <span className="hidden sm:inline">Reiniciar</span>
              </button>

              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                title="Questão anterior"
              >
                <ChevronLeft size={14} />
                <span className="hidden sm:inline">Anterior</span>
              </button>
            </div>
          </div>

          {/* Row 2: stat chips */}
          <div className="flex items-center gap-3 mb-4">
            {/* Question counter */}
            <div className="flex items-center gap-2 bg-slate-900/70 rounded-xl px-3 py-2 border border-slate-800">
              <span className="text-xs text-slate-400 font-semibold">Questão</span>
              <span className="font-black text-white text-sm tabular-nums">{currentIndex + 1}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 text-sm tabular-nums">{shuffledQuestions.length}</span>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Correct chip */}
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-3 py-2">
              <Check size={13} className="text-emerald-400 shrink-0" />
              <span className="text-emerald-300 text-sm font-black tabular-nums">{correct}</span>
              <span className="text-emerald-600 text-xs hidden sm:inline">certas</span>
            </div>

            {/* Wrong chip */}
            <div className="flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/25 rounded-xl px-3 py-2">
              <X size={13} className="text-rose-400 shrink-0" />
              <span className="text-rose-300 text-sm font-black tabular-nums">
                {answers.filter(Boolean).filter(a => !a.isCorrect).length}
              </span>
              <span className="text-rose-600 text-xs hidden sm:inline">erradas</span>
            </div>

            {/* Percentage chip */}
            <div className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/25 rounded-xl px-3 py-2">
              <span className="text-cyan-300 text-sm font-black tabular-nums">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Row 3: animated gradient progress bar */}
          <div className="h-2.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
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

      <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.28 }}
            className="card rounded-2xl p-5 md:p-6 border border-slate-700 flex-1"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
              {currentQuestion.topic && (
                <div className="text-xs text-slate-400 mb-2">{currentQuestion.topic}</div>
              )}
              {currentQuestion.question}
            </h2>

            {currentQuestion.image && (
              <div className="mb-6 rounded-2xl border border-slate-700 bg-slate-900/70 p-1 md:p-2 max-w-[420px] mx-auto">
                <img
                  src={currentQuestion.image}
                  alt={`Figura relacionada à pergunta ${currentIndex + 1}`}
                  className="w-full h-auto max-h-80 object-contain rounded-xl"
                />
              </div>
            )}

            <div className="space-y-3">
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
                    className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-200 ${buttonStyle}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex-1">{option}</span>
                      {showResult && isCorrectAnswer && (
                        <Check className="text-emerald-400 ml-2" size={20} />
                      )}
                      {showResult && isSelected && !isCorrectAnswer && (
                        <X className="text-red-400 ml-2" size={20} />
                      )}
                    </div>
                  </motion.button>
                );
              })}
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