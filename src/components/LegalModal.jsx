import { AnimatePresence, motion } from 'framer-motion';

const legal = '“ProTRON-X does not include, distribute, host, or provide commercial game ROMs. This project is designed for legally obtained homebrew, freeware, public-domain, or personally authorized Game Boy Advance-compatible ROM files. Users are responsible for ensuring they have the legal right to use any ROM they load.”';

export default function LegalModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="max-w-2xl rounded-xl border border-slate-600 bg-slate-900 p-6 text-slate-200" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
            <h2 className="text-xl font-bold">About / Legal</h2>
            <p className="mt-4 text-sm leading-relaxed">{legal}</p>
            <p className="mt-3 text-sm">ProTRON-X ships with no games, no BIOS files, and no copyrighted Nintendo assets. Freeware and homebrew ROM examples are discussed only as legal test-case usage.</p>
            <button onClick={onClose} className="mt-5 rounded bg-cyan-500 px-4 py-2 font-semibold text-slate-900">Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
