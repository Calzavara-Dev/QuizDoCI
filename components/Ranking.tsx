import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Trophy, Medal, Award, RefreshCw, Clock, 
  User, Filter, Search, TrendingUp, Target, Globe, 
  BarChart3, AlertCircle, ChevronLeft, ChevronRight, Sparkles 
} from "lucide-react";
import { quizzes, quizTitles } from "../data/questions";
import { getRankName, type Rankings } from "../utils/rankings";
import { fetchRemoteResults } from "../utils/supabase";
import { useEffect, useState, useMemo } from "react";

interface RankingProps {
  rankings: Rankings;
  selectedQuiz: string;
  onBack: () => void;
}

const getRankBadgeStyle = (percentage: number) => {
  if (percentage >= 90) return { name: "Diamante", color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30", icon: "💎", glow: "shadow-[0_0_15px_rgba(0,229,255,0.2)]" };
  if (percentage >= 75) return { name: "Ouro", color: "text-amber-300 bg-amber-500/10 border-amber-500/30", icon: "🏆", glow: "shadow-[0_0_15px_rgba(245,158,11,0.2)]" };
  if (percentage >= 60) return { name: "Prata", color: "text-slate-200 bg-slate-400/10 border-slate-400/30", icon: "🥈", glow: "" };
  if (percentage >= 45) return { name: "Bronze", color: "text-orange-300 bg-orange-500/10 border-orange-500/30", icon: "🥉", glow: "" };
  return { name: "Iniciante", color: "text-slate-400 bg-slate-800 border-slate-700", icon: "🌱", glow: "" };
};

export function Ranking({ rankings, selectedQuiz, onBack }: RankingProps) {
  const quizKeys = Object.keys(quizzes);
  const [activeTab, setActiveTab] = useState<'local' | 'remote'>('local');
  
  // Remote state
  const [remote, setRemote] = useState<any[] | null>(null);
  const [loadingRemote, setLoadingRemote] = useState(true);
  const [remoteError, setRemoteError] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [intervalSeconds, setIntervalSeconds] = useState<number>(30);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Filters and sorting for remote leaderboard
  const [searchTerm, setSearchTerm] = useState("");
  const [filterQuiz, setFilterQuiz] = useState("all");
  const [sortBy, setSortBy] = useState<'score' | 'recent'>('score');
  const [currentRemotePage, setCurrentRemotePage] = useState(1);
  const remoteItemsPerPage = 12;

  // Local pagination
  const [currentLocalPage, setCurrentLocalPage] = useState(1);
  const localItemsPerPage = 10;

  const doFetch = async () => {
    setLoadingRemote(true);
    setRemoteError(false);
    try {
      const res = await fetchRemoteResults(200);
      setRemote(res);
      setRemoteError(res === null);
      if (res) setLastUpdated(new Date());
    } catch (e) {
      setRemote(null);
      setRemoteError(true);
    } finally {
      setLoadingRemote(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) doFetch();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;
    const id = setInterval(() => {
      doFetch();
    }, intervalSeconds * 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRefresh, intervalSeconds]);

  // Filtered and Sorted Remote Results
  const filteredRemote = useMemo(() => {
    if (!remote) return [];
    return remote
      .filter((r) => {
        const matchSearch = !searchTerm.trim() || 
          r.name?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchQuiz = filterQuiz === "all" || r.quiz_id === filterQuiz;
        return matchSearch && matchQuiz;
      })
      .sort((a, b) => {
        if (sortBy === "score") {
          if (b.percentage !== a.percentage) return b.percentage - a.percentage;
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
  }, [remote, searchTerm, filterQuiz, sortBy]);

  const totalRemotePages = Math.max(1, Math.ceil(filteredRemote.length / remoteItemsPerPage));
  const paginatedRemote = filteredRemote.slice(
    (currentRemotePage - 1) * remoteItemsPerPage,
    currentRemotePage * remoteItemsPerPage
  );

  const totalLocalPages = Math.max(1, Math.ceil(quizKeys.length / localItemsPerPage));
  const paginatedLocalKeys = quizKeys.slice(
    (currentLocalPage - 1) * localItemsPerPage,
    currentLocalPage * localItemsPerPage
  );

  const overallBadge = getRankBadgeStyle(rankings.overall.averagePercentage);
  const selectedQuizData = rankings.quizzes[selectedQuiz] ?? { averagePercentage: 0, bestPercentage: 0, lastPercentage: 0, attempts: 0 };
  const selectedQuizBadge = getRankBadgeStyle(selectedQuizData.averagePercentage);
  const selectedQuizName = quizTitles[selectedQuiz] ?? selectedQuiz.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-start p-4 md:p-6 bg-app"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        className="w-full max-w-5xl card rounded-3xl p-5 md:p-8 mt-2 md:mt-4 shadow-2xl border border-slate-700/80"
      >
        {/* Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack} 
              className="ghost-btn p-2.5 rounded-xl flex items-center gap-2 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
              title="Voltar"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-semibold">Voltar</span>
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2.5">
                <Trophy className="text-amber-400 shrink-0" size={28} />
                <span>Central de Ranking</span>
              </h1>
              <p className="text-xs md:text-sm text-slate-400">Acompanhe seu progresso individual e compare resultados com toda a turma</p>
            </div>
          </div>

          {/* Live Indicator / Auto-refresh Toggle */}
          <div className="flex items-center gap-3 bg-slate-950/70 border border-slate-800 rounded-2xl p-2 px-3 self-start sm:self-center">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                {autoRefresh && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${autoRefresh ? 'bg-emerald-500' : 'bg-slate-600'}`} />
              </span>
              <span className="text-xs font-semibold text-slate-300">Ao vivo</span>
            </div>
            <div className="h-4 w-[1px] bg-slate-800" />
            <select
              value={intervalSeconds}
              onChange={(e) => setIntervalSeconds(Number(e.target.value))}
              className="bg-transparent border-0 text-xs font-semibold text-cyan-400 cursor-pointer focus:outline-none py-0.5 pr-6"
              title="Tempo para atualização automática"
            >
              <option value={15}>15s</option>
              <option value={30}>30s</option>
              <option value={60}>60s</option>
            </select>
            <button
              onClick={() => doFetch()}
              disabled={loadingRemote}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors disabled:opacity-50"
              title="Atualizar agora"
            >
              <RefreshCw size={14} className={loadingRemote ? "animate-spin text-cyan-400" : ""} />
            </button>
          </div>
        </div>

        {/* 3-Column Summary Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Card 1: Geral */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-5 shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BarChart3 size={14} className="text-cyan-400" /> Média Geral
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${overallBadge.color}`}>
                {overallBadge.icon} {overallBadge.name}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">{rankings.overall.averagePercentage}%</span>
              <span className="text-xs text-slate-400">aproveitamento</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between text-xs text-slate-300">
              <span>Melhor: <strong className="text-emerald-400 font-bold">{rankings.overall.bestPercentage}%</strong></span>
              <span>Tentativas: <strong className="text-white font-bold">{rankings.overall.attempts}</strong></span>
            </div>
          </div>

          {/* Card 2: Selected Quiz */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-5 shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 truncate pr-2">
                <Target size={14} className="text-amber-400 shrink-0" /> {selectedQuizName}
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${selectedQuizBadge.color}`}>
                {selectedQuizBadge.icon} {selectedQuizBadge.name}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">{selectedQuizData.averagePercentage}%</span>
              <span className="text-xs text-slate-400">neste quiz</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between text-xs text-slate-300">
              <span>Melhor: <strong className="text-amber-400 font-bold">{selectedQuizData.bestPercentage}%</strong></span>
              <span>Tentativas: <strong className="text-white font-bold">{selectedQuizData.attempts}</strong></span>
            </div>
          </div>

          {/* Card 3: Servidor / Comunidade */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-5 shadow-lg flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Globe size={14} className="text-purple-400" /> Placar da Turma
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {remote ? `${remote.length} registros` : "Offline"}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compare sua pontuação com colegas em tempo real no servidor na nuvem.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
              <span>Última sincronização:</span>
              <span className="text-white font-mono">{lastUpdated ? lastUpdated.toLocaleTimeString() : "Buscando..."}</span>
            </div>
          </div>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex border-b border-slate-800 mb-6 gap-2">
          <button
            onClick={() => setActiveTab('local')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-t-2xl transition-all border-b-2 ${
              activeTab === 'local'
                ? 'bg-slate-800/90 text-cyan-400 border-cyan-500 shadow-lg'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-slate-800/40'
            }`}
          >
            <User size={16} />
            <span>Meu Histórico por Quiz</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[11px] bg-slate-950 text-slate-300 border border-slate-700">
              {quizKeys.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('remote')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-t-2xl transition-all border-b-2 ${
              activeTab === 'remote'
                ? 'bg-slate-800/90 text-cyan-400 border-cyan-500 shadow-lg'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-slate-800/40'
            }`}
          >
            <Globe size={16} />
            <span>Placar Global (Ao Vivo)</span>
            {remote && (
              <span className="ml-1 px-2 py-0.5 rounded-full text-[11px] bg-slate-950 text-cyan-300 border border-cyan-500/30">
                {remote.length}
              </span>
            )}
          </button>
        </div>

        {/* TAB 1 CONTENT: MEU HISTÓRICO LOCAL */}
        <AnimatePresence mode="wait">
          {activeTab === 'local' && (
            <motion.div
              key="local-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <div className="text-sm text-slate-300">
                  Exibindo <span className="font-bold text-white">{paginatedLocalKeys.length}</span> de <span className="font-bold text-white">{quizKeys.length}</span> módulos de Quiz
                </div>
                {totalLocalPages > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentLocalPage === 1}
                      onClick={() => setCurrentLocalPage((p) => Math.max(1, p - 1))}
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 disabled:opacity-40 hover:bg-slate-800 text-white transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-xs font-mono text-slate-300">
                      Pág <strong className="text-white">{currentLocalPage}</strong> de {totalLocalPages}
                    </span>
                    <button
                      disabled={currentLocalPage === totalLocalPages}
                      onClick={() => setCurrentLocalPage((p) => Math.min(totalLocalPages, p + 1))}
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 disabled:opacity-40 hover:bg-slate-800 text-white transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/50 shadow-inner">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-slate-900/90 text-slate-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800">
                      <th className="py-3 px-4">Matéria / Módulo</th>
                      <th className="py-3 px-4">Nível</th>
                      <th className="py-3 px-4 text-center">Média</th>
                      <th className="py-3 px-4 text-center">Melhor</th>
                      <th className="py-3 px-4 text-center">Última</th>
                      <th className="py-3 px-4 text-center">Tentativas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {paginatedLocalKeys.map((key) => {
                      const quizData = rankings.quizzes[key];
                      const name = quizTitles[key] ?? key.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                      const badge = quizData ? getRankBadgeStyle(quizData.averagePercentage) : getRankBadgeStyle(0);
                      const isSelected = key === selectedQuiz;

                      return (
                        <tr 
                          key={key} 
                          className={`transition-colors hover:bg-slate-800/60 ${isSelected ? "bg-cyan-950/20 font-medium" : ""}`}
                        >
                          <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                            {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />}
                            <span>{name}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${badge.color}`}>
                              <span>{badge.icon}</span>
                              <span>{quizData && quizData.attempts > 0 ? badge.name : "Sem testes"}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono text-slate-300">
                            {quizData && quizData.attempts > 0 ? (
                              <span className="font-bold text-white">{quizData.averagePercentage}%</span>
                            ) : "-"}
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono text-emerald-400 font-bold">
                            {quizData && quizData.attempts > 0 ? `${quizData.bestPercentage}%` : "-"}
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono text-slate-400">
                            {quizData && quizData.attempts > 0 ? `${quizData.lastPercentage}%` : "-"}
                          </td>
                          <td className="py-3.5 px-4 text-center font-mono">
                            {quizData && quizData.attempts > 0 ? (
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-bold">{quizData.attempts}</span>
                            ) : (
                              <span className="text-slate-600 text-xs">0</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 2 CONTENT: PLACAR GLOBAL (REMOTE) */}
          {activeTab === 'remote' && (
            <motion.div
              key="remote-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Toolbar: Search, Filter, Sort */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Search bar */}
                  <div className="relative flex-1 max-w-sm">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentRemotePage(1);
                      }}
                      placeholder="Buscar por nome do aluno..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                    />
                    {searchTerm && (
                      <button 
                        onClick={() => setSearchTerm("")} 
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                      >
                        ×
                      </button>
                    )}
                  </div>

                  {/* Filter by Quiz */}
                  <div className="flex items-center gap-2">
                    <Filter size={14} className="text-slate-400 shrink-0" />
                    <select
                      value={filterQuiz}
                      onChange={(e) => {
                        setFilterQuiz(e.target.value);
                        setCurrentRemotePage(1);
                      }}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="all">Todos os Quizzes ({remote?.length ?? 0})</option>
                      {quizKeys.map((key) => (
                        <option key={key} value={key}>
                          {quizTitles[key] ?? key}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sort Order */}
                <div className="flex items-center justify-end gap-2 border-t md:border-t-0 pt-2 md:pt-0 border-slate-800">
                  <span className="text-xs text-slate-400 font-semibold shrink-0">Ordenar por:</span>
                  <div className="inline-flex bg-slate-900 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setSortBy('score')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        sortBy === 'score'
                          ? 'bg-cyan-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Maior %
                    </button>
                    <button
                      onClick={() => setSortBy('recent')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        sortBy === 'recent'
                          ? 'bg-cyan-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Recentes
                    </button>
                  </div>
                </div>
              </div>

              {/* Status and Pagination info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300 px-1">
                <div>
                  Mostrando <strong className="text-white">{paginatedRemote.length}</strong> de <strong className="text-white">{filteredRemote.length}</strong> resultados encontrados
                </div>
                {totalRemotePages > 1 && (
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      disabled={currentRemotePage === 1}
                      onClick={() => setCurrentRemotePage((p) => Math.max(1, p - 1))}
                      className="p-1 rounded bg-slate-900 border border-slate-700 disabled:opacity-40 hover:bg-slate-800 text-white transition-all"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="font-mono">
                      Pág <strong className="text-white">{currentRemotePage}</strong> / {totalRemotePages}
                    </span>
                    <button
                      disabled={currentRemotePage === totalRemotePages}
                      onClick={() => setCurrentRemotePage((p) => Math.min(totalRemotePages, p + 1))}
                      className="p-1 rounded bg-slate-900 border border-slate-700 disabled:opacity-40 hover:bg-slate-800 text-white transition-all"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* Remote Table */}
              {loadingRemote && !remote ? (
                <div className="py-16 text-center rounded-2xl border border-slate-800 bg-slate-950/40 text-slate-400 flex flex-col items-center justify-center gap-3">
                  <RefreshCw size={28} className="animate-spin text-cyan-400" />
                  <p className="text-sm font-semibold">Carregando placar global do servidor...</p>
                </div>
              ) : remoteError ? (
                <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-950/20 text-rose-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle size={24} className="text-rose-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Falha de Conexão</h4>
                      <p className="text-xs text-rose-300/80 mt-0.5">Não foi possível carregar os dados do servidor. Verifique sua internet ou a configuração do banco de dados.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => doFetch()} 
                    className="px-4 py-2 rounded-xl bg-rose-500 text-slate-950 font-bold text-xs hover:bg-rose-400 transition-colors shrink-0"
                  >
                    Tentar Novamente
                  </button>
                </div>
              ) : paginatedRemote.length === 0 ? (
                <div className="py-16 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/30 text-slate-500 text-sm">
                  <Trophy size={36} className="mx-auto mb-2 opacity-30 text-slate-400" />
                  <p className="text-white font-semibold">Nenhum resultado encontrado no placar</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {searchTerm || filterQuiz !== "all" 
                      ? "Tente limpar a busca ou selecionar outro quiz no filtro acima." 
                      : "Dê o primeiro passo! Complete um quiz para ver seu nome no topo."}
                  </p>
                  {(searchTerm || filterQuiz !== "all") && (
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setFilterQuiz("all");
                      }}
                      className="mt-4 px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-cyan-400 transition-colors"
                    >
                      Limpar Filtros
                    </button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/50 shadow-inner">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-slate-900/90 text-slate-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800">
                        <th className="py-3 px-4 w-16 text-center">Pos</th>
                        <th className="py-3 px-4">Aluno / Jogador</th>
                        <th className="py-3 px-4">Módulo de Quiz</th>
                        <th className="py-3 px-4 text-center">Nota (%)</th>
                        <th className="py-3 px-4 text-center">Nível</th>
                        <th className="py-3 px-4 text-right">Data / Hora</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {paginatedRemote.map((r, idx) => {
                        const absoluteIndex = (currentRemotePage - 1) * remoteItemsPerPage + idx + 1;
                        const badge = getRankBadgeStyle(r.percentage);
                        const quizName = quizTitles[r.quiz_id] ?? r.quiz_id;

                        // Medal formatting for top 3 in score order
                        let rankMedal = null;
                        if (sortBy === 'score' && absoluteIndex === 1) rankMedal = { icon: "🥇", class: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-black shadow-lg shadow-amber-500/10" };
                        else if (sortBy === 'score' && absoluteIndex === 2) rankMedal = { icon: "🥈", class: "bg-slate-300/20 text-slate-200 border-slate-300/40 font-bold" };
                        else if (sortBy === 'score' && absoluteIndex === 3) rankMedal = { icon: "🥉", class: "bg-orange-500/20 text-orange-300 border-orange-500/40 font-bold" };

                        return (
                          <tr 
                            key={idx} 
                            className={`transition-colors hover:bg-slate-800/60 ${absoluteIndex <= 3 && sortBy === 'score' ? "bg-slate-900/40" : ""}`}
                          >
                            <td className="py-3.5 px-4 text-center">
                              {rankMedal ? (
                                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg border text-sm ${rankMedal.class}`}>
                                  {rankMedal.icon}
                                </span>
                              ) : (
                                <span className="font-mono text-xs font-bold text-slate-400">#{absoluteIndex}</span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                              <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-extrabold text-cyan-400 shrink-0 uppercase">
                                {r.name ? r.name.charAt(0) : "?"}
                              </span>
                              <span className="truncate max-w-[180px] sm:max-w-xs">{r.name || "Anônimo"}</span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-300 text-xs font-medium">
                              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 truncate block max-w-[160px] sm:max-w-[220px]">
                                {quizName}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-center font-mono">
                              <span className={`text-base font-black ${
                                r.percentage >= 90 ? "text-cyan-300" : r.percentage >= 70 ? "text-emerald-400" : r.percentage >= 50 ? "text-amber-400" : "text-rose-400"
                              }`}>
                                {r.percentage}%
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-center">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold border ${badge.color}`}>
                                <span>{badge.icon}</span>
                                <span className="hidden sm:inline">{badge.name}</span>
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right font-mono text-xs text-slate-400">
                              {new Date(r.created_at).toLocaleDateString()} <span className="text-slate-500">{new Date(r.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Ranking;
