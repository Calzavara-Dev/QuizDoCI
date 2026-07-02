import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { quizzes, quizTitles } from "../data/questions";
import { getRankName, type Rankings } from "../utils/rankings";
import { fetchRemoteResults } from "../utils/supabase";
import { useEffect, useState } from "react";

interface RankingProps {
  rankings: Rankings;
  selectedQuiz: string;
  onBack: () => void;
}

export function Ranking({ rankings, selectedQuiz, onBack }: RankingProps) {
  const quizKeys = Object.keys(quizzes);
  const [remote, setRemote] = useState<any[] | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchRemoteResults(200).then((res) => {
      if (!mounted) return;
      setRemote(res);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-app"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: "spring" }}
        className="w-full max-w-3xl card rounded-3xl p-6"
      >
        <div className="mb-4 flex items-center gap-3">
          <button onClick={onBack} className="ghost-btn p-2 rounded">
            <ArrowLeft size={18} /> Voltar
          </button>
          <h2 className="text-2xl font-bold text-white">Ranking Geral e por Quiz</h2>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-4 text-left">
            <p className="text-sm text-slate-400 mb-2">Ranking Geral</p>
            <p className="text-xl font-bold text-white">{getRankName(rankings.overall.averagePercentage)}</p>
            <p className="text-slate-300 text-sm mt-2">
              Média: {rankings.overall.averagePercentage}% • Melhor: {rankings.overall.bestPercentage}%
            </p>
            <p className="text-slate-300 text-sm">Tentativas: {rankings.overall.attempts}</p>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-4 text-left">
            <p className="text-sm text-slate-400 mb-2">Ranking do Quiz Selecionado</p>
            <p className="text-xl font-bold text-white">{getRankName((rankings.quizzes[selectedQuiz] ?? { averagePercentage: 0 }).averagePercentage)}</p>
            {rankings.quizzes[selectedQuiz] ? (
              <>
                <p className="text-slate-300 text-sm mt-2">
                  Média: {rankings.quizzes[selectedQuiz].averagePercentage}% • Melhor: {rankings.quizzes[selectedQuiz].bestPercentage}%
                </p>
                <p className="text-slate-300 text-sm">Última: {rankings.quizzes[selectedQuiz].lastPercentage}%</p>
                <p className="text-slate-300 text-sm">Tentativas: {rankings.quizzes[selectedQuiz].attempts}</p>
              </>
            ) : (
              <p className="text-slate-400 text-sm mt-2">Sem histórico para este quiz.</p>
            )}
          </div>
        </div>

        <div className="mb-6 overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Tabela de Ranking por Quiz</h3>
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
                const quizData = rankings.quizzes[key];
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
        {remote && remote.length > 0 && (
          <div className="mb-6 overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Últimos resultados (Servidor)</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-slate-400 text-left border-b border-slate-700">
                  <th className="py-2 pr-4">Nome</th>
                  <th className="py-2 pr-4">Quiz</th>
                  <th className="py-2 pr-4">%</th>
                  <th className="py-2 pr-4">Data</th>
                </tr>
              </thead>
              <tbody>
                {remote.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-800" : "bg-slate-900"}>
                    <td className="py-3 pr-4 text-white">{r.name}</td>
                    <td className="py-3 pr-4 text-slate-300">{quizTitles[r.quiz_id] ?? r.quiz_id}</td>
                    <td className="py-3 pr-4 text-slate-300">{r.percentage}%</td>
                    <td className="py-3 pr-4 text-slate-300">{new Date(r.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Ranking;
