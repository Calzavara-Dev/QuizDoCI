import { motion, AnimatePresence } from "framer-motion";
import { 
  RotateCcw, Trophy, Target, XCircle, CheckCircle2, 
  Home, Share2, Copy, Check, Sparkles, Award, 
  TrendingUp, BarChart3, AlertCircle, Filter, BookOpen 
} from "lucide-react";
import type { ResultData } from "../App";
import { getRankName, type Rankings } from "../utils/rankings";
import { useState, useMemo } from "react";
import { ConfirmModal } from "./ConfirmModal";
import { quizTitles } from "../data/questions";

interface ResultsProps {
  data: ResultData;
  rankings: Rankings;
  onRestart: () => void;
  onRestartSameQuiz: () => void;
  onBackToStart?: () => void;
}

const getRankBadgeStyle = (percentage: number) => {
  if (percentage >= 90) return { name: "Diamante", color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30", icon: "💎", glow: "shadow-[0_0_25px_rgba(0,229,255,0.25)]", gradient: "from-cyan-500/20 via-blue-500/10 to-transparent" };
  if (percentage >= 75) return { name: "Ouro", color: "text-amber-300 bg-amber-500/10 border-amber-500/30", icon: "🏆", glow: "shadow-[0_0_25px_rgba(245,158,11,0.25)]", gradient: "from-amber-500/20 via-yellow-500/10 to-transparent" };
  if (percentage >= 60) return { name: "Prata", color: "text-slate-200 bg-slate-400/10 border-slate-400/30", icon: "🥈", glow: "shadow-[0_0_15px_rgba(148,163,184,0.15)]", gradient: "from-slate-400/20 via-slate-500/10 to-transparent" };
  if (percentage >= 45) return { name: "Bronze", color: "text-orange-300 bg-orange-500/10 border-orange-500/30", icon: "🥉", glow: "", gradient: "from-orange-500/20 via-amber-600/10 to-transparent" };
  return { name: "Iniciante", color: "text-rose-300 bg-rose-500/10 border-rose-500/30", icon: "🌱", glow: "", gradient: "from-rose-500/20 via-red-600/10 to-transparent" };
};

export function Results({ data, rankings, onRestart, onRestartSameQuiz, onBackToStart }: ResultsProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [copied, setCopied] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'correct' | 'incorrect'>('all');

  const percentage = Math.round((data.correct / data.total) * 100);
  const badge = getRankBadgeStyle(percentage);
  const quizName = quizTitles[data.quizId] ?? data.quizId.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  
  const overallRankName = getRankName(rankings.overall.averagePercentage);
  const overallBadge = getRankBadgeStyle(rankings.overall.averagePercentage);
  
  const quizRank = rankings.quizzes[data.quizId];
  const quizRankName = quizRank ? getRankName(quizRank.averagePercentage) : "Sem histórico";
  const quizRankBadge = quizRank ? getRankBadgeStyle(quizRank.averagePercentage) : getRankBadgeStyle(0);
  
  let grade = "";
  let gradeColor = "";
  let message = "";
  
  if (percentage >= 90) {
    grade = "Desempenho Excelente!";
    gradeColor = "text-cyan-400 text-glow-cyan";
    message = "Você domina com maestria todo o conteúdo deste módulo!";
  } else if (percentage >= 75) {
    grade = "Muito Bom!";
    gradeColor = "text-amber-400";
    message = "Parabéns! Você tem um ótimo conhecimento no assunto.";
  } else if (percentage >= 60) {
    grade = "Bom Trabalho!";
    gradeColor = "text-emerald-400";
    message = "Você foi aprovado, mas continue estudando para alcançar o topo.";
  } else if (percentage >= 45) {
    grade = "Aproveitamento Razoável";
    gradeColor = "text-orange-400";
    message = "Vale a pena revisar os tópicos errados e tentar novamente.";
  } else {
    grade = "Hora de Revisar";
    gradeColor = "text-rose-400";
    message = "Não desista! Estude o material de apoio e refaça o quiz.";
  }

  const filteredAnswers = useMemo(() => {
    const validAnswers = data.answers.filter(Boolean);
    if (filterType === 'correct') return validAnswers.filter((a) => a.isCorrect);
    if (filterType === 'incorrect') return validAnswers.filter((a) => !a.isCorrect);
    return validAnswers;
  }, [data.answers, filterType]);

  const handleCopyResult = () => {
    const summary = `🏆 Quiz: ${quizName}\n📊 Nota: ${percentage}% (${data.correct}/${data.total} acertos)\n🏅 Nível Alcançado: ${badge.name} ${badge.icon}\n⚡ Treinado no QuizDoCI!`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-start p-3 sm:p-4 md:p-6 bg-app"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        className="w-full max-w-3xl card rounded-3xl p-4 sm:p-6 md:p-8 mt-2 md:mt-4 shadow-2xl border border-slate-700/80 relative overflow-hidden"
      >
        {/* Background Atmosphere Glow */}
        <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br ${badge.gradient} blur-3xl pointer-events-none opacity-60`} />
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-bold text-slate-300 mb-4 sm:mb-6 shadow-sm">
            <BookOpen size={14} className="text-cyan-400 shrink-0" />
            <span className="truncate max-w-[220px] sm:max-w-none">Módulo: <strong className="text-white">{quizName}</strong></span>
          </div>

          <div className="mb-4 sm:mb-6 flex justify-center">
            <motion.div 
              initial={{ scale: 0.5, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className={`p-4 sm:p-6 rounded-3xl border ${badge.color} ${badge.glow} bg-slate-900/90 shadow-2xl relative`}
            >
              <span className="text-5xl sm:text-6xl md:text-7xl block select-none">{badge.icon}</span>
            </motion.div>
          </div>

          <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border mb-2.5 ${badge.color}`}>
            Nível {badge.name}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">Resultado Final</h1>
          <p className={`text-lg sm:text-xl md:text-2xl font-black ${gradeColor}`}>{grade}</p>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 max-w-lg mx-auto leading-relaxed">{message}</p>
        </div>

        {/* 3-Column Highlights Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 relative z-10">
          <div className="bg-slate-900/80 rounded-2xl p-3 sm:p-4 md:p-5 border border-emerald-500/20 text-center shadow-lg hover:border-emerald-500/40 transition-colors">
            <CheckCircle2 className="text-emerald-400 mx-auto mb-1 sm:mb-2 shrink-0" size={24} />
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white">{data.correct}</p>
            <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm font-semibold mt-0.5">Acertos</p>
          </div>
          
          <div className="bg-slate-900/80 rounded-2xl p-3 sm:p-4 md:p-5 border border-rose-500/20 text-center shadow-lg hover:border-rose-500/40 transition-colors">
            <XCircle className="text-rose-400 mx-auto mb-1 sm:mb-2 shrink-0" size={24} />
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white">{data.total - data.correct}</p>
            <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm font-semibold mt-0.5">Erros</p>
          </div>
          
          <div className="bg-slate-900/80 rounded-2xl p-3 sm:p-4 md:p-5 border border-cyan-500/20 text-center shadow-lg hover:border-cyan-500/40 transition-colors">
            <Target className="text-cyan-400 mx-auto mb-1 sm:mb-2 shrink-0" size={24} />
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white">{percentage}%</p>
            <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm font-semibold mt-0.5">Aproveitamento</p>
          </div>
        </div>

        {/* 2-Column Ranking Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 relative z-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-left flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">Média Geral no App</p>
              <p className="text-lg font-bold text-white flex items-center gap-1.5">
                <span>{overallBadge.icon}</span>
                <span>{overallRankName}</span>
              </p>
              <p className="text-slate-400 text-xs mt-1 font-mono">Média acumulada: <strong className="text-cyan-400">{rankings.overall.averagePercentage}%</strong></p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
              <BarChart3 size={22} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-left flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">Seu Rank em {quizName}</p>
              <p className="text-lg font-bold text-white flex items-center gap-1.5">
                <span>{quizRankBadge.icon}</span>
                <span>{quizRankName}</span>
              </p>
              {quizRank ? (
                <p className="text-slate-400 text-xs mt-1 font-mono">Média do quiz: <strong className="text-amber-400">{quizRank.averagePercentage}%</strong></p>
              ) : (
                <p className="text-slate-500 text-xs mt-1">Primeiro teste registrado!</p>
              )}
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
              <Award size={22} />
            </div>
          </div>
        </div>

        {/* DETAILED ANSWERS REVIEW WITH FILTER TABS */}
        <div className="bg-slate-950/50 rounded-2xl p-5 border border-slate-800 mb-8 relative z-10 shadow-inner">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-cyan-400" />
              <h3 className="text-base font-bold text-white">Revisão das Respostas</h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-center">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'all' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Todas ({data.answers.filter(Boolean).length})
              </button>
              <button
                onClick={() => setFilterType('correct')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterType === 'correct' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>✓ Acertos ({data.correct})</span>
              </button>
              <button
                onClick={() => setFilterType('incorrect')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterType === 'incorrect' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>✗ Erros ({data.total - data.correct})</span>
              </button>
            </div>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {filteredAnswers.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm font-medium">
                {filterType === 'incorrect' ? (
                  <div className="flex flex-col items-center gap-2">
                    <Sparkles className="text-amber-400 w-8 h-8 animate-bounce" />
                    <p className="text-white font-bold">Parabéns! Nenhum erro encontrado!</p>
                    <p className="text-xs text-slate-400">Você acertou todas as questões deste filtro.</p>
                  </div>
                ) : (
                  <p>Nenhuma questão para exibir neste filtro.</p>
                )}
              </div>
            ) : (
              filteredAnswers.map((answer, index) => (
                <div
                  key={index}
                  className={`p-3.5 rounded-xl border transition-all ${
                    answer.isCorrect
                      ? "bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/50"
                      : "bg-rose-950/20 border-rose-500/30 hover:border-rose-500/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-black ${
                      answer.isCorrect ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                    }`}>
                      {answer.isCorrect ? "✓" : "✗"}
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <p className="text-white text-sm font-semibold leading-relaxed">{answer.question}</p>
                      
                      <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium">
                        <span className={`px-2.5 py-1 rounded-lg border ${
                          answer.isCorrect ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : "bg-rose-500/10 border-rose-500/20 text-rose-300 line-through"
                        }`}>
                          Sua resposta: {answer.userAnswer}
                        </span>
                        
                        {!answer.isCorrect && (
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold">
                            Correta: {answer.correctAnswer} ✓
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRestartSameQuiz}
            className="w-full primary-btn font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            title={`Reiniciar este quiz com as questões embaralhadas novamente`}
          >
            <RotateCcw size={18} />
            <span>Tentar Novamente</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopyResult}
            className="w-full ghost-btn font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200"
          >
            {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} className="text-cyan-400" />}
            <span className={copied ? "text-emerald-400 font-bold" : ""}>{copied ? "Copiado!" : "Copiar Resumo"}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowConfirm(true)}
            className="w-full ghost-btn font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-slate-400 hover:text-white"
          >
            <Home size={18} />
            <span>Início</span>
          </motion.button>
        </div>

        {/* Secondary: swap quiz link */}
        <div className="mt-3 text-center relative z-10">
          <button
            onClick={onRestart}
            className="text-xs text-slate-500 hover:text-cyan-400 transition-colors underline underline-offset-2"
          >
            Escolher outro quiz
          </button>
        </div>

        <ConfirmModal
          open={showConfirm}
          title="Voltar ao Início"
          message="Tem certeza que deseja voltar ao menu principal? Seu progresso neste teste foi salvo com sucesso!"
          onConfirm={() => { setShowConfirm(false); onBackToStart && onBackToStart(); }}
          onCancel={() => setShowConfirm(false)}
        />
      </motion.div>
    </motion.div>
  );
}