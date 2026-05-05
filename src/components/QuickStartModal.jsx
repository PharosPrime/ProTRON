import { AnimatePresence, motion } from 'framer-motion';

export default function QuickStartModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="w-full max-w-2xl rounded-xl border border-slate-600 bg-slate-900 p-6 text-slate-200" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
            <h2 className="text-2xl font-bold text-cyan-300">Browser Quick Start</h2>
            <p className="mt-3 text-sm">No terminal is needed for gameplay. Once this app is hosted, usage is browser-only.</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
              <li>Click <strong>Power On</strong>.</li>
              <li>Click <strong>Load ROM</strong> and pick a local <code>.gba</code> or <code>.bin</code> file.</li>
              <li>Click the screen once, then use keyboard or on-device controls.</li>
              <li>Use <strong>Reset</strong> to reboot emulation or <strong>Exit</strong> to unload ROM.</li>
            </ol>
            <p className="mt-4 text-xs text-slate-400">If emulator assets are missing, place EmulatorJS files under <code>public/emulatorjs/data/</code> before deployment.</p>
            <button onClick={onClose} className="mt-5 rounded bg-cyan-500 px-4 py-2 font-semibold text-slate-900">Enter Console</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
