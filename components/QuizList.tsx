import { motion } from "framer-motion";
import { quizzes, quizTitles } from "../data/questions";

interface QuizListProps {
  onSelect: (quizId: string) => void;
  onBack: () => void;
}

export function QuizList({ onSelect, onBack }: QuizListProps) {
  const keys = Object.keys(quizzes);

  const formatLabel = (key: string) => key.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const getLabel = (k: string) => quizTitles[k] ?? formatLabel(k);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md card rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Selecionar Quiz</h2>
        <div className="grid grid-cols-1 gap-3">
          {keys.map((k) => (
            <motion.button key={k} onClick={() => onSelect(k)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 primary-btn rounded-xl text-center font-semibold">
              {getLabel(k)}
            </motion.button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button onClick={onBack} className="ghost-btn p-2 rounded">Voltar</button>
        </div>
      </motion.div>
    </div>
  );
}
