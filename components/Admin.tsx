import React, { useState } from "react";
import { quizzes } from "../data/questions";
import type { Question } from "../types/question";
import { getQuizzesSync } from "../utils/questionLoader";
import { fetchRemoteQuestions, saveRemoteQuestions } from "../utils/supabase";
import { Lock, User, Key, Eye, EyeOff, ShieldCheck, AlertCircle, LogOut, ArrowLeft, Plus, Trash2, Edit2, Check, Download, Upload, Search, FileText, ChevronLeft, ChevronRight, Copy, CheckCircle2, Cloud } from "lucide-react";

interface AdminProps {
  onClose: () => void;
}

export function Admin({ onClose }: AdminProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Painel Admin state
  const [localQuizzes, setLocalQuizzes] = useState<Record<string, Question[]>>(() =>
    JSON.parse(JSON.stringify(getQuizzesSync()))
  );
  const [selectedQuiz, setSelectedQuiz] = useState<string>(
    Object.keys(localQuizzes)[0] ?? "telefonia"
  );
  const [activeTab, setActiveTab] = useState<'questions' | 'json'>('questions');
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jsonText, setJsonText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const [syncingCloud, setSyncingCloud] = useState<boolean>(false);
  const [cloudStatusMessage, setCloudStatusMessage] = useState<string | null>(null);

  const itemsPerPage = 10;
  const quizKeys = Object.keys(localQuizzes);

  async function handleSaveToCloud() {
    setSyncingCloud(true);
    setCloudStatusMessage(null);
    const ok = await saveRemoteQuestions(selectedQuiz, localQuizzes[selectedQuiz] || []);
    setSyncingCloud(false);
    if (ok) {
      setCloudStatusMessage(`✅ Módulo "${selectedQuiz}" salvo na nuvem com sucesso!`);
      setTimeout(() => setCloudStatusMessage(null), 5000);
    } else {
      setCloudStatusMessage(`❌ Erro ao salvar na nuvem. Verifique a tabela quiz_questions no Supabase.`);
      setTimeout(() => setCloudStatusMessage(null), 5000);
    }
  }

  async function handleLoadFromCloud() {
    setSyncingCloud(true);
    setCloudStatusMessage(null);
    const remote = await fetchRemoteQuestions(selectedQuiz);
    setSyncingCloud(false);
    if (remote && remote[selectedQuiz]) {
      setLocalQuizzes(prev => ({ ...prev, [selectedQuiz]: remote[selectedQuiz] }));
      setCloudStatusMessage(`☁️ Módulo "${selectedQuiz}" atualizado com questões da nuvem!`);
      setTimeout(() => setCloudStatusMessage(null), 5000);
    } else {
      setCloudStatusMessage(`ℹ️ Nenhuma questão encontrada na nuvem para "${selectedQuiz}". Usando local.`);
      setTimeout(() => setCloudStatusMessage(null), 5000);
    }
  }

  function updateQuestion(idx: number, q: Partial<Question>) {
    setLocalQuizzes((prev) => {
      const copy = { ...prev };
      copy[selectedQuiz] = copy[selectedQuiz].map((item, i) =>
        i === idx ? { ...item, ...q } : item
      );
      return copy;
    });
  }

  function addQuestion() {
    const newQ: Question = {
      question: "Nova pergunta - Digite o enunciado aqui...",
      options: ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
      answer: "Alternativa A",
    };
    setLocalQuizzes((prev) => {
      const copy = { ...prev };
      copy[selectedQuiz] = [newQ, ...copy[selectedQuiz]];
      return copy;
    });
    setSearchQuery("");
    setCurrentPage(1);
  }

  function removeQuestion(idx: number) {
    if (window.confirm("Tem certeza que deseja excluir esta questão?")) {
      setLocalQuizzes((prev) => {
        const copy = { ...prev };
        copy[selectedQuiz] = copy[selectedQuiz].filter((_, i) => i !== idx);
        return copy;
      });
    }
  }

  function exportJSON() {
    const str = JSON.stringify(localQuizzes[selectedQuiz], null, 2);
    setJsonText(str);
    setActiveTab('json');
  }

  function copyToClipboard() {
    const str = JSON.stringify(localQuizzes[selectedQuiz], null, 2);
    navigator.clipboard.writeText(str);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function importJSON() {
    try {
      const parsed = JSON.parse(jsonText) as Question[];
      if (!Array.isArray(parsed)) throw new Error("O JSON precisa ser um array de questões [ { ... } ]");
      setLocalQuizzes((prev) => ({ ...prev, [selectedQuiz]: parsed }));
      alert("Sucesso! Questões importadas e atualizadas no painel.");
      setActiveTab('questions');
    } catch (e: any) {
      alert("Erro ao importar JSON: " + e.message);
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "admin" && password === "Calzavara@h20") {
      setError(false);
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  // Filtragem e Paginação
  const currentQuestions = localQuizzes[selectedQuiz] || [];
  const filteredQuestions = currentQuestions
    .map((q, originalIndex) => ({ ...q, originalIndex }))
    .filter((q) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        q.question.toLowerCase().includes(query) ||
        q.options.some((opt) => opt.toLowerCase().includes(query)) ||
        q.answer.toLowerCase().includes(query)
      );
    });

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / itemsPerPage));
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 relative overflow-hidden w-full">
        {/* Glows de fundo premium */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl relative z-10 animate-fade-in">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Acesso Administrativo</h2>
            <p className="text-sm text-slate-400 mt-1">
              Digite suas credenciais para gerenciar os bancos de questões
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Usuário
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Ex: admin"
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs animate-shake">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Usuário ou senha incorretos. Verifique suas credenciais!</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="w-full primary-btn py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Entrar no Painel</span>
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800/80 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-800/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para a tela inicial</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-6 bg-slate-950 w-full animate-fade-in">
      <div className="w-full max-w-5xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 mt-4 shadow-2xl">
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Edit2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Administração de Quiz</h2>
              <p className="text-xs text-slate-400">Painel intuitivo para edição e organização de questões</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleLoadFromCloud}
              disabled={syncingCloud}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-all disabled:opacity-50"
              title="Baixar questões cadastradas na nuvem"
            >
              <Cloud className="w-4 h-4 text-cyan-400" />
              <span>{syncingCloud ? "Sincronizando..." : "Carregar da Nuvem"}</span>
            </button>

            <button
              type="button"
              onClick={handleSaveToCloud}
              disabled={syncingCloud}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 text-xs font-bold transition-all shadow-sm disabled:opacity-50"
              title="Salvar módulo atualizado no banco Supabase"
            >
              <Upload className="w-4 h-4 text-emerald-400" />
              <span>{syncingCloud ? "Salvando..." : "Salvar na Nuvem"}</span>
            </button>

            <button
              className="ghost-btn flex items-center gap-1.5 text-xs text-slate-300 hover:text-white py-2 px-3"
              onClick={() => {
                setIsAuthenticated(false);
                setPassword("");
              }}
            >
              <LogOut className="w-4 h-4" />
              <span>Sair</span>
            </button>
            <button className="primary-btn flex items-center gap-1.5 text-xs py-2 px-4" onClick={onClose}>
              <span>Fechar Painel</span>
            </button>
          </div>
        </div>

        {cloudStatusMessage && (
          <div className="mb-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-center justify-between animate-fade-in">
            <span>{cloudStatusMessage}</span>
          </div>
        )}

        {/* Abas de Navegação */}
        <div className="flex border-b border-slate-800 mb-6 gap-2">
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
              activeTab === 'questions'
                ? 'bg-slate-800/80 text-cyan-400 border-cyan-500'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-slate-800/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Gerenciar Questões</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-slate-950 text-slate-300 border border-slate-700">
              {currentQuestions.length}
            </span>
          </button>
          <button
            onClick={() => {
              setActiveTab('json');
              if (!jsonText) setJsonText(JSON.stringify(localQuizzes[selectedQuiz], null, 2));
            }}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
              activeTab === 'json'
                ? 'bg-slate-800/80 text-cyan-400 border-cyan-500'
                : 'text-slate-400 hover:text-white border-transparent hover:bg-slate-800/40'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>Importar / Exportar JSON</span>
          </button>
        </div>

        {/* CONTEÚDO DA ABA 1: GERENCIAR QUESTÕES */}
        {activeTab === 'questions' && (
          <div className="space-y-6">
            {/* Barra de Ferramentas: Seleção, Busca e Adição */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">Quiz:</label>
                <select
                  value={selectedQuiz}
                  onChange={(e) => {
                    setSelectedQuiz(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm font-medium text-white focus:outline-none focus:border-cyan-500 min-w-[200px]"
                >
                  {quizKeys.map((k) => (
                    <option key={k} value={k}>{k}</option>
                  ))}
                </select>
                <button
                  className="ghost-btn text-xs py-2 px-2.5 flex items-center gap-1 text-slate-300 hover:text-white"
                  onClick={() => {
                    const name = prompt('Nome do novo quiz (id):');
                    if (name) {
                      setLocalQuizzes((prev) => ({ ...prev, [name]: [] }));
                      setSelectedQuiz(name);
                      setCurrentPage(1);
                    }
                  }}
                  title="Criar um novo banco de quiz"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Novo</span>
                </button>
              </div>

              {/* Campo de Busca */}
              <div className="flex-1 max-w-md relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Buscar questão ou alternativa..."
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-white"
                  >
                    Limpar
                  </button>
                )}
              </div>

              <div>
                <button
                  className="primary-btn text-xs py-2 px-4 flex items-center justify-center gap-1.5 w-full md:w-auto shadow-md shadow-cyan-500/10"
                  onClick={addQuestion}
                >
                  <Plus className="w-4 h-4" />
                  <span>Nova Pergunta</span>
                </button>
              </div>
            </div>

            {/* Informações de Paginação no topo */}
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <div>
                Exibindo <span className="font-semibold text-white">{paginatedQuestions.length}</span> de <span className="font-semibold text-white">{filteredQuestions.length}</span> questões
                {searchQuery && <span className="text-cyan-400 ml-1">(filtradas)</span>}
              </div>
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="p-1 rounded bg-slate-800 border border-slate-700 disabled:opacity-40 hover:bg-slate-700 text-white transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono">
                    Pág <span className="text-white font-bold">{currentPage}</span> / {totalPages}
                  </span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="p-1 rounded bg-slate-800 border border-slate-700 disabled:opacity-40 hover:bg-slate-700 text-white transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Lista de Questões Paginação e Limpa */}
            <div className="space-y-4">
              {paginatedQuestions.map((q) => {
                const idx = q.originalIndex;
                return (
                  <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 hover:border-slate-700 transition-all shadow-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        {/* Enunciado */}
                        <div className="flex items-start gap-3">
                          <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
                            #{idx + 1}
                          </span>
                          <textarea
                            rows={2}
                            className="w-full bg-slate-900/80 border border-slate-700 rounded-lg text-white px-3 py-2 text-sm font-medium focus:outline-none focus:border-cyan-500 transition-all resize-y"
                            value={q.question}
                            onChange={(e) => updateQuestion(idx, { question: e.target.value })}
                            placeholder="Digite o enunciado da questão aqui..."
                          />
                        </div>

                        {/* Alternativas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 md:pl-11">
                          {q.options.map((opt, i) => {
                            const isCorrect = q.answer === opt;
                            return (
                              <div
                                key={i}
                                className={`flex items-center gap-2 p-1.5 rounded-lg border transition-all ${
                                  isCorrect
                                    ? 'bg-emerald-500/10 border-emerald-500/40'
                                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                                }`}
                              >
                                <span className="text-xs font-bold text-slate-400 font-mono w-5 text-center">
                                  {String.fromCharCode(65 + i)}:
                                </span>
                                <input
                                  className="flex-1 bg-transparent border-0 text-xs text-white focus:outline-none px-1 py-1"
                                  value={opt}
                                  onChange={(e) => {
                                    const newOpts = [...q.options];
                                    newOpts[i] = e.target.value;
                                    updateQuestion(idx, { options: newOpts });
                                    // Se era a resposta correta, atualiza a resposta também
                                    if (isCorrect) {
                                      updateQuestion(idx, { answer: e.target.value });
                                    }
                                  }}
                                  placeholder={`Alternativa ${String.fromCharCode(65 + i)}`}
                                />
                                <button
                                  type="button"
                                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 shrink-0 transition-all ${
                                    isCorrect
                                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm shadow-emerald-500/20'
                                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                                  }`}
                                  onClick={() => updateQuestion(idx, { answer: opt })}
                                  title="Marcar esta alternativa como a resposta correta"
                                >
                                  {isCorrect && <Check className="w-3.5 h-3.5" />}
                                  <span>{isCorrect ? 'Correta' : 'Marcar'}</span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Ações da Pergunta */}
                      <div className="flex flex-col gap-2">
                        <button
                          type="button"
                          className="p-2.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all border border-transparent hover:border-red-500/20"
                          onClick={() => removeQuestion(idx)}
                          title="Excluir esta pergunta"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {paginatedQuestions.length === 0 && (
                <div className="text-center py-16 bg-slate-950/40 rounded-xl border border-dashed border-slate-800 text-slate-500 text-sm">
                  {searchQuery ? (
                    <div>
                      <p className="mb-2">Nenhuma questão encontrada para a busca "{searchQuery}".</p>
                      <button onClick={() => setSearchQuery("")} className="text-cyan-400 hover:underline text-xs">Limpar filtro</button>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-2">Este quiz ainda não possui perguntas cadastradas.</p>
                      <button onClick={addQuestion} className="primary-btn text-xs py-2 px-4 mt-2">
                        + Adicionar Primeira Pergunta
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Paginação inferior */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-800">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 disabled:opacity-40 hover:bg-slate-700 text-xs text-white transition-all flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>
                <span className="text-xs text-slate-400 px-3">
                  Página <span className="text-white font-bold">{currentPage}</span> de <span className="text-white font-bold">{totalPages}</span>
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 disabled:opacity-40 hover:bg-slate-700 text-xs text-white transition-all flex items-center gap-1"
                >
                  Próxima <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* CONTEÚDO DA ABA 2: FERRAMENTAS JSON */}
        {activeTab === 'json' && (
          <div className="space-y-6 bg-slate-950/40 p-6 rounded-xl border border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                <Upload className="w-4 h-4 text-cyan-400" />
                <span>Importar ou Exportar Questões em JSON</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                Utilize esta ferramenta para fazer backup das questões do quiz <span className="text-white font-semibold">{selectedQuiz}</span> ou transferir bancos de perguntas inteiros. O formato precisa ser um array JSON contendo objetos com <code>question</code>, <code>options</code> (array de 4 strings) e <code>answer</code> (string correspondente a uma das opções).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setJsonText(JSON.stringify(localQuizzes[selectedQuiz], null, 2));
                }}
                className="ghost-btn text-xs py-2 px-3 flex items-center gap-1.5 border border-slate-700"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Carregar JSON do Quiz Selecionado</span>
              </button>
              <button
                onClick={copyToClipboard}
                className="ghost-btn text-xs py-2 px-3 flex items-center gap-1.5 border border-slate-700"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
                <span className={copied ? "text-emerald-400 font-semibold" : ""}>{copied ? "Copiado!" : "Copiar para Área de Transferência"}</span>
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Código JSON do Quiz ({selectedQuiz})
              </label>
              <textarea
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                rows={14}
                placeholder="Cole aqui o array JSON de questões para importar..."
                className="w-full bg-slate-950 border border-slate-800 text-slate-300 p-4 rounded-xl text-xs font-mono focus:outline-none focus:border-cyan-500 transition-all leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800/80">
              <button
                onClick={() => setJsonText("")}
                className="ghost-btn text-xs py-2 px-4"
              >
                Limpar Texto
              </button>
              <button
                onClick={importJSON}
                className="primary-btn text-xs py-2.5 px-6 flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Upload className="w-4 h-4" />
                <span>Importar e Sobrescrever Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

