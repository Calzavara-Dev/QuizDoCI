import { motion } from "framer-motion";

interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({ open, title = "Confirmação", message = "Tem certeza? Esta ação fará você voltar à tela inicial e perder o progresso atual.", onConfirm, onCancel }: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800 rounded-xl p-6 max-w-md w-full text-white"
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 mb-4">{message}</p>

        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="px-4 py-2 bg-slate-700 rounded-md">Cancelar</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-rose-500 rounded-md text-white">Confirmar</button>
        </div>
      </motion.div>
    </div>
  );
}
