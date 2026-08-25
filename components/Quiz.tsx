import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, RotateCcw, ChevronLeft, ZoomIn, ZoomOut } from "lucide-react";
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
    const hasRealProgress =
      parsed.currentIndex > 0 ||
      (Array.isArray(parsed.answers) && parsed.answers.some((a) => a != null));
    if (!hasRealProgress) return null;
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
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() => {
    const freshQuestions = getDynamicShuffledQuestions(quizId);
    if (savedProgress?.shuffledQuestions && Array.isArray(savedProgress.shuffledQuestions)) {
      if (savedProgress.shuffledQuestions.length === (freshQuestions?.length || 0)) {
        return savedProgress.shuffledQuestions;
      }
    }
    return Array.isArray(freshQuestions) ? freshQuestions : [];
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
  const [imageScale, setImageScale] = useState(1);
  const isTransitioningRef = useRef(false);

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

  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageScale((prev) => Math.min(prev + 0.25, 3.5));
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageScale(1);
  };

  const handleWheelZoom = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      setImageScale((prev) => Math.min(prev + 0.15, 3.5));
    } else {
      setImageScale((prev) => Math.max(prev - 0.15, 0.5));
    }
  };

  const touchStartDistRef = useRef<number | null>(null);
  const touchStartScaleRef = useRef<number>(1);
  const lastTapTimeRef = useRef<number>(0);

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return null;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = getTouchDistance(e.touches);
      if (dist !== null) {
        touchStartDistRef.current = dist;
        touchStartScaleRef.current = imageScale;
      }
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapTimeRef.current < 280) {
        setImageScale((prev) => (prev > 1.2 ? 1 : 2.2));
      }
      lastTapTimeRef.current = now;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDistRef.current !== null) {
      const currentDist = getTouchDistance(e.touches);
      if (currentDist !== null) {
        const factor = currentDist / touchStartDistRef.current;
        const newScale = Math.min(Math.max(touchStartScaleRef.current * factor, 0.5), 3.5);
        setImageScale(newScale);
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      touchStartDistRef.current = null;
    }
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomedImage) {
        if (e.key === "Escape") {
          setZoomedImage(null);
          setImageScale(1);
        } else if (e.key === "+" || e.key === "=") {
          setImageScale((prev) => Math.min(prev + 0.25, 3.5));
        } else if (e.key === "-") {
          setImageScale((prev) => Math.max(prev - 0.25, 0.5));
        } else if (e.key === "0") {
          setImageScale(1);
        }
        return;
      }
      if (showResult && (e.key === "Enter" || e.key === " ")) {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showResult, zoomedImage]);

  useEffect(() => {
    const hasStarted = currentIndex > 0 || answers.some((a) => a != null);
    if (!hasStarted) return;
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
        explanation: currentQuestion.explanation,
      };
      return next;
    });
  };

  const handlePrevious = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setTimeout(() => { isTransitioningRef.current = false; }, 300);

    if (currentIndex === 0) return;
    setCurrentIndex((c) => c - 1);
  };

  const handleNext = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setTimeout(() => { isTransitioningRef.current = false; }, 300);

    if (currentIndex === shuffledQuestions.length - 1) {
      clearProgress();
      const filledAnswers = shuffledQuestions.map((q, i) => {
        return answers[i] || {
          question: q.question,
          isCorrect: false,
          userAnswer: "Não respondida",
          correctAnswer: q.answer,
          explanation: q.explanation,
        };
      });
      onFinish({
        correct,
        total: shuffledQuestions.length,
        answers: filledAnswers,
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
    setShuffledQuestions(fresh);
    setCurrentIndex(0);
    setCorrect(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowRestartConfirm(false);
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-app">
        <p className="text-white text-xl">Carregando quiz ou nenhuma questão disponível...</p>
      </div>
    );
  }

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

      {/* Modal de ampliação de figura com controle de zoom */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setZoomedImage(null);
              setImageScale(1);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center bg-slate-900 border border-slate-700 rounded-2xl p-3 sm:p-5 shadow-2xl overflow-hidden cursor-default"
            >
              {/* Barra de controle de Zoom */}
              <div className="w-full flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-1 sm:gap-2 bg-slate-950/80 p-1 rounded-xl border border-slate-700">
                  <button
                    onClick={handleZoomOut}
                    disabled={imageScale <= 0.5}
                    className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-cyan-300 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                    title="Diminuir zoom (-)"
                  >
                    <ZoomOut size={18} />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="px-2.5 py-1 rounded-lg hover:bg-slate-800 text-xs sm:text-sm font-bold text-cyan-300 transition-colors"
                    title="Restaurar zoom original (100%)"
                  >
                    {Math.round(imageScale * 100)}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={imageScale >= 3.5}
                    className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-cyan-300 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                    title="Aumentar zoom (+)"
                  >
                    <ZoomIn size={18} />
                  </button>
                  {imageScale !== 1 && (
                    <button
                      onClick={handleResetZoom}
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-amber-300 transition-colors"
                      title="Reiniciar zoom"
                    >
                      <RotateCcw size={16} />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-xs text-slate-400">
                    Use os botões ou o scroll do mouse para ajustar
                  </span>
                  <button
                    onClick={() => {
                      setZoomedImage(null);
                      setImageScale(1);
                    }}
                    className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-md"
                    title="Fechar figura (ESC)"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Container da imagem ampliada com suporte a scroll, touch mobile e zoom de roda do mouse */}
              <div 
                onWheel={handleWheelZoom}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="w-full overflow-auto max-h-[75vh] flex items-center justify-center p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 cursor-grab active:cursor-grabbing touch-none"
              >
                <motion.img
                  src={zoomedImage}
                  alt="Figura ampliada"
                  animate={{ scale: imageScale }}
                  transition={{ type: "spring", damping: 30, stiffness: 350 }}
                  style={{ transformOrigin: "center center" }}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg select-none"
                />
              </div>

              <p className="text-xs text-slate-400 mt-2.5 font-medium text-center">
                <span className="hidden sm:inline">
                  Clique nos botões de zoom (<span className="text-cyan-300 font-bold">+</span> / <span className="text-cyan-300 font-bold">-</span>) ou use a rodinha do mouse para ampliar detalhes
                </span>
                <span className="sm:hidden">
                  Faça o gesto de pinça com 2 dedos, dê 2 toques rápidos ou use os botões (<span className="text-cyan-300 font-bold">+</span> / <span className="text-cyan-300 font-bold">-</span>)
                </span>
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
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                {currentQuestion.options && currentQuestion.options.length > 2 ? (
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm">
                    ✓ Múltipla Escolha
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm">
                    ⚡ Questão Direta
                  </span>
                )}
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6 leading-relaxed">
                {currentQuestion.question}
              </h2>

              {currentQuestion.image && (
                <div 
                  onClick={() => {
                    setImageScale(1);
                    setZoomedImage(currentQuestion.image || null);
                  }}
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
                  {currentQuestion.explanation && (
                    <div className="mt-3 pt-3 border-t border-slate-700/50 text-xs text-slate-300 leading-relaxed">
                      <span className="font-semibold text-emerald-400">Comentário: </span>
                      {currentQuestion.explanation}
                    </div>
                  )}
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