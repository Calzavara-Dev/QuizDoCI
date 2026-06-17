import React, { useState } from "react";
import { quizzes } from "../data/questions";
import type { Question } from "../types/question";

interface AdminProps {
  onClose: () => void;
}

export function Admin({ onClose }: AdminProps) {
  const [localQuizzes, setLocalQuizzes] = useState<Record<string, Question[]>>(
    JSON.parse(JSON.stringify(quizzes))
  );
  const [selectedQuiz, setSelectedQuiz] = useState<string>(
    Object.keys(localQuizzes)[0] ?? "telefonia"
  );
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [jsonText, setJsonText] = useState<string>("");

  const quizKeys = Object.keys(localQuizzes);

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
      question: "Nova pergunta",
      options: ["A","B","C","D"],
      answer: "A",
    };
    setLocalQuizzes((prev) => {
      const copy = { ...prev };
      copy[selectedQuiz] = [...copy[selectedQuiz], newQ];
      return copy;
    });
  }

  function removeQuestion(idx: number) {
    setLocalQuizzes((prev) => {
      const copy = { ...prev };
      copy[selectedQuiz] = copy[selectedQuiz].filter((_, i) => i !== idx);
      return copy;
    });
  }

  function exportJSON() {
    setJsonText(JSON.stringify(localQuizzes[selectedQuiz], null, 2));
  }

  function importJSON() {
    try {
      const parsed = JSON.parse(jsonText) as Question[];
      if (!Array.isArray(parsed)) throw new Error("JSON inválido");
      setLocalQuizzes((prev) => ({ ...prev, [selectedQuiz]: parsed }));
      alert("Importado com sucesso (só em memória)");
    } catch (e: any) {
      alert("Erro ao importar JSON: " + e.message);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-6 bg-slate-900">
      <div className="w-full max-w-4xl card rounded-2xl p-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Administração de Quizzes</h2>
          <div className="flex gap-2">
            <button className="ghost-btn" onClick={exportJSON}>Exportar JSON</button>
            <button className="primary-btn" onClick={onClose}>Fechar</button>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-slate-300 mr-2">Quiz:</label>
          <select
            value={selectedQuiz}
            onChange={(e) => setSelectedQuiz(e.target.value)}
            className="bg-transparent border border-slate-700 rounded p-2 text-white"
          >
            {quizKeys.map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
          <button className="ml-3 ghost-btn" onClick={() => { const name = prompt('Nome do novo quiz (id):'); if(name){ setLocalQuizzes(prev => ({...prev, [name]: []})); setSelectedQuiz(name);} }}>Novo Quiz</button>
        </div>

        <div className="mb-4">
          <button className="primary-btn" onClick={addQuestion}>Adicionar Pergunta</button>
        </div>

        <div className="space-y-3">
          {localQuizzes[selectedQuiz]?.map((q, idx) => (
            <div key={idx} className="p-3 rounded border border-slate-700">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <input className="w-full bg-transparent border-b border-slate-700 text-white mb-2 p-1" value={q.question} onChange={(e) => updateQuestion(idx, { question: e.target.value })} />
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input className="flex-1 bg-transparent border border-slate-700 p-1 text-white" value={opt} onChange={(e) => {
                          const newOpts = [...q.options];
                          newOpts[i] = e.target.value;
                          updateQuestion(idx, { options: newOpts });
                        }} />
                        <button className={`ghost-btn ${q.answer === opt ? 'border-emerald-400 text-emerald-400' : ''}`} onClick={() => updateQuestion(idx, { answer: opt })}>Correta</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <button className="ghost-btn" onClick={() => setEditingIndex(editingIndex === idx ? null : idx)}>Editar</button>
                  <button className="ghost-btn" onClick={() => removeQuestion(idx)}>Remover</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-slate-300 mb-2">Importar / Colar JSON do quiz selecionado</label>
          <textarea value={jsonText} onChange={(e) => setJsonText(e.target.value)} className="w-full h-28 bg-transparent border border-slate-700 text-white p-2 rounded" />
          <div className="mt-2 flex gap-2">
            <button className="primary-btn" onClick={importJSON}>Importar</button>
            <button className="ghost-btn" onClick={() => setJsonText('')}>Limpar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
