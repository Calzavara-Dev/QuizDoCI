import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { getShuffledQuestions } from "../data/questions";
import type { ResultData } from "../App";
import { ConfirmModal } from "./ConfirmModal";

interface QuizProps {
  onFinish: (data: ResultData) => void;
  quizId?: string;
  onBackToStart?: () => void;
}

export function Quiz({ onFinish, quizId = "telefonia", onBackToStart }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [answers, setAnswers] = useState<ResultData["answers"]>([]);
  const [shuffledQuestions] = useState(() => getShuffledQuestions(quizId));
  const [showConfirm, setShowConfirm] = useState(false);

  const currentQuestion = shuffledQuestions[currentIndex];
  const progress = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showResult && (e.key === "Enter" || e.key === " ")) {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showResult]);

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === currentQuestion.answer;
    if (isCorrect) setCorrect(c => c + 1);
    
    setAnswers(prev => [...prev, {
      question: currentQuestion.question,
      isCorrect,
      userAnswer: answer,
      correctAnswer: currentQuestion.answer
    }]);
  };

  const handleNext = () => {
    if (currentIndex === shuffledQuestions.length - 1) {
      onFinish({
        correct,
        total: shuffledQuestions.length,
        answers
      });
    } else {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-6">
      <div className="max-w-md w-full mx-auto mb-6 flex justify-between items-center">
        <button
          onClick={() => setShowConfirm(true)}
          className="text-slate-300 hover:text-white text-sm"
        >
          Voltar ao Início
        </button>
      </div>
      <ConfirmModal
        open={showConfirm}
        title="Voltar ao Início"
        message="Tem certeza que deseja voltar ao início? Seu progresso atual será perdido."
        onConfirm={() => { setShowConfirm(false); onBackToStart && onBackToStart(); }}
        onCancel={() => setShowConfirm(false)}
      />
      <div className="max-w-3xl w-full mx-auto mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 text-sm">
            Questão {currentIndex + 1} de {shuffledQuestions.length}
          </span>
          <span className="text-cyan-400 font-bold">
            {correct} corretas
          </span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="max-w-md w-full mx-auto flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.28 }}
            className="card rounded-2xl p-5 md:p-6 border border-slate-700 flex-1"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 leading-relaxed">
              {currentQuestion.topic && (
                <div className="text-xs text-slate-400 mb-2">{currentQuestion.topic}</div>
              )}
              {currentQuestion.question}
            </h2>

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