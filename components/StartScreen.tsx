import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Play } from "lucide-react";
import { quizzes } from "../data/questions";

interface StartScreenProps {
  onStart: (quizId?: string) => void;
  onOpenSelector?: () => void;
}

export function StartScreen({ onStart, onOpenSelector }: StartScreenProps) {
  const quizKeys = Object.keys(quizzes);
  const [selected, setSelected] = useState<string>(quizKeys[0] ?? "telefonia");
  const [selectedApostila, setSelectedApostila] = useState("apostila-1");
  const selectedCount = quizzes[selected]?.length ?? 0;
  const totalQuestions = quizKeys.reduce((sum, k) => sum + (quizzes[k]?.length ?? 0), 0);

  const formatLabel = (key: string) => {
    return key.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const apostilas = [
    { id: "apostila-1", label: "Apostila 1", url: new URL('../assets/apostila.pdf', import.meta.url).href },
    { id: "apostila-2", label: "Apostila 2", url: new URL('../assets/apostila-2.pdf', import.meta.url).href },
  ];
  const selectedApostilaData = apostilas.find((apostila) => apostila.id === selectedApostila) ?? apostilas[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 bg-app"
      style={{ ['--bg-image' as any]: `url(${new URL('../assets/bg.jpg', import.meta.url).href})` }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: "spring" }}
        className="w-full max-w-md card rounded-3xl p-6"
      >
        <div className="mb-6 flex justify-center">
          <div className="p-5 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-400/10">
            <Phone className="text-cyan-400" size={48} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 text-center">
          QUIZ DO <span className="text-cyan-400">CI</span>
        </h1>

        <p className="text-slate-300 text-sm mb-6 text-center">
          Teste seus conhecimentos.
        </p>

        <div className="mb-4">
          <div className="rounded-xl p-4 card text-center max-w-xs mx-auto">
            <p className="text-3xl font-bold text-cyan-400">{totalQuestions}</p>
            <p className="text-slate-300 text-sm">Total de Questões</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="rounded-xl p-4 card text-center max-w-md mx-auto">
            <p className="text-lg font-semibold text-white mb-2">Apostila para estudo</p>
            <p className="text-slate-300 text-sm mb-3">Escolha a apostila e abra ou baixe o PDF desejado.</p>
            <label htmlFor="apostila-select" className="block text-left text-sm text-slate-300 mb-2">
              Selecione a apostila
            </label>
            <select
              id="apostila-select"
              value={selectedApostila}
              onChange={(event) => setSelectedApostila(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            >
              {apostilas.map((apostila) => (
                <option key={apostila.id} value={apostila.id}>
                  {apostila.label}
                </option>
              ))}
            </select>
            <div className="flex gap-3 justify-center mt-3">
              <a
                href={selectedApostilaData.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg ghost-btn"
                aria-label="Abrir apostila em nova aba"
              >
                Abrir apostila
              </a>
              <a
                href={selectedApostilaData.url}
                download
                className="px-4 py-2 rounded-lg primary-btn"
                aria-label="Baixar apostila"
              >
                Baixar PDF
              </a>
            </div>
          </div>
        </div>

      

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => (onOpenSelector ? onOpenSelector() : onStart(selected))}
          className="w-full py-3 rounded-xl primary-btn font-bold text-center flex items-center justify-center gap-3"
        >
          <Play size={20} />
          Iniciar Quiz
        </motion.button>
        
      </motion.div>
    </motion.div>
  );
}