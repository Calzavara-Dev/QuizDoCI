import { motion } from "framer-motion";
import { RotateCcw, Trophy, Target, XCircle } from "lucide-react";
import type { ResultData } from "../App";
import { getRankName, type Rankings } from "../utils/rankings";
import { useState } from "react";
import { ConfirmModal } from "./ConfirmModal";

interface ResultsProps {
  data: ResultData;
  rankings: Rankings;
  onRestart: () => void;
  onBackToStart?: () => void;
}
export function Results({ data, rankings, onRestart, onBackToStart }: ResultsProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const percentage = Math.round((data.correct / data.total) * 100);
  const overallRankName = getRankName(rankings.overall.averagePercentage);
  const quizRank = rankings.quizzes[data.quizId];
  const quizRankName = quizRank ? getRankName(quizRank.averagePercentage) : "Sem histórico";
  
  let grade = "";
  let gradeColor = "";
  let message = "";
  
  if (percentage >= 90) {
    grade = "Excelente!";
    gradeColor = "text-emerald-400";
    message = "Você domina muito bem o conteúdo de telefonia!";
  } else if (percentage >= 70) {
    grade = "Muito Bom!";
    gradeColor = "text-cyan-400";
    message = "Você tem um bom conhecimento sobre telefonia.";
  } else if (percentage >= 50) {
    grade = "Bom";
    gradeColor = "text-amber-400";
    message = "Continue estudando para melhorar ainda mais!";
  } else {
    grade = "Precisa Estudar";
    gradeColor = "text-red-400";
    message = "Revise o conteúdo e tente novamente.";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.18, type: "spring" }}
        className="w-full max-w-md card rounded-3xl p-6"
      >
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <div className={`p-6 rounded-full ${percentage >= 70 ? "bg-emerald-500/10" : "bg-amber-500/10"}`}>
              <Trophy className={percentage >= 70 ? "text-emerald-400" : "text-amber-400"} size={64} />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-2">Resultado</h1>
          <p className={`text-2xl font-bold ${gradeColor}`}>{grade}</p>
          <p className="text-slate-400 mt-2">{message}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 text-left">
            <p className="text-sm text-slate-400 mb-2">Ranking Geral</p>
            <p className="text-xl font-semibold text-white">{overallRankName}</p>
            <p className="text-slate-300 text-sm mt-2">Média: {rankings.overall.averagePercentage}%</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 text-left">
            <p className="text-sm text-slate-400 mb-2">Ranking do Quiz</p>
            <p className="text-xl font-semibold text-white">{quizRankName}</p>
            {quizRank ? (
              <p className="text-slate-300 text-sm mt-2">Média: {quizRank.averagePercentage}%</p>
            ) : (
              <p className="text-slate-400 text-sm mt-2">Faça mais quizzes para começar a pontuar.</p>
            )}
          </div>
        </div>

  <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <Target className="text-cyan-400 mx-auto mb-2" size={32} />
            <p className="text-3xl font-bold text-white">{data.correct}</p>
            <p className="text-slate-400 text-sm">Acertos</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <XCircle className="text-red-400 mx-auto mb-2" size={32} />
            <p className="text-3xl font-bold text-white">{data.total - data.correct}</p>
            <p className="text-slate-400 text-sm">Erros</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <p className="text-cyan-400 text-3xl mb-2">%</p>
            <p className="text-3xl font-bold text-white">{percentage}%</p>
            <p className="text-slate-400 text-sm">Aproveitamento</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 mb-6 card">
          <h3 className="text-lg font-semibold text-white mb-4">Resumo das Respostas</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {data.answers.map((answer, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  answer.isCorrect
                    ? "bg-emerald-500/10 border border-emerald-500/20"
                    : "bg-red-500/10 border border-red-500/20"
                }`}
              >
                <div className="flex items-start gap-2">
                  {answer.isCorrect ? (
                    <span className="text-emerald-400 mt-1">✓</span>
                  ) : (
                    <span className="text-red-400 mt-1">✗</span>
                  )}
                  <div className="flex-1">
                    <p className="text-white text-sm">{answer.question}</p>
                    {!answer.isCorrect && (
                      <p className="text-slate-400 text-xs mt-1">
                        Correta: {answer.correctAnswer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="w-full primary-btn font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mb-3"
        >
          <RotateCcw size={18} />
          Jogar Novamente
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowConfirm(true)}
          className="w-full ghost-btn font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          Voltar ao Início
        </motion.button>
        <ConfirmModal
          open={showConfirm}
          title="Voltar ao Início"
          message="Tem certeza que deseja voltar ao início? Seu progresso atual será perdido."
          onConfirm={() => { setShowConfirm(false); onBackToStart && onBackToStart(); }}
          onCancel={() => setShowConfirm(false)}
        />
      </motion.div>
    </motion.div>
  );
}