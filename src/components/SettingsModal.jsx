import { AnimatePresence, motion } from 'framer-motion';

export default function SettingsModal({ open, onClose, dataPath, onChangePath }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="w-full max-w-xl rounded-xl border border-slate-600 bg-slate-900 p-6 text-slate-200" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}>
            <h2 className="text-xl font-bold">Service Hatch</h2>
            <label className="mt-4 block text-sm">EmulatorJS data path</label>
            <input value={dataPath} onChange={(e) => onChangePath(e.target.value)} className="mt-2 w-full rounded bg-slate-800 p-2" />
            <div className="mt-4 text-sm">
              <p className="font-semibold">Default key mapping</p>
              <ul className="mt-1 list-disc pl-5">
                <li>D-pad: Arrow keys</li><li>A: X</li><li>B: Z</li><li>Start: Enter</li><li>Select: Shift</li><li>L: A</li><li>R: S</li>
              </ul>
              <p className="mt-3">v1.0 uses local, user-selected ROM files only; no ROM upload or cloud sync is performed.</p>
            </div>
            <button onClick={onClose} className="mt-5 rounded bg-cyan-500 px-4 py-2 font-semibold text-slate-900">Close Hatch</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
