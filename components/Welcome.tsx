import { Radio, Waves, Signal } from "lucide-react";
import { motion } from "framer-motion";

interface WelcomeProps {
  onStart: () => void;
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center gap-4 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-cyan-400"
          >
            <Radio size={48} />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-emerald-400"
          >
            <Waves size={48} />
          </motion.div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-amber-400"
          >
            <Signal size={48} />
          </motion.div>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          QUIZ DO <span className="text-cyan-400">CI</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Teste seus conhecimentos sobre sistemas de comunicação, ondas, sinais e muito mais!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="bg-slate-800 rounded-2xl p-6 max-w-md w-full border border-slate-700 card"
      >
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-sm">93</span>
            </div>
            <span>Questões disponíveis</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-sm">✓</span>
            </div>
            <span>Feedback instantâneo</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-amber-400 font-bold text-sm">★</span>
            </div>
            <span>Pontuação detalhada</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="w-full primary-btn font-bold py-3 rounded-xl transition-colors text-lg"
        >
          Iniciar Quiz
        </motion.button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-slate-500 text-sm mt-8"
      >
        3SG-CI CALZAVARA
      </motion.p>
    </div>
  );
}