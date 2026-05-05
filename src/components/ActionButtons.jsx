import { motion } from 'framer-motion';

const circle = 'h-16 w-16 rounded-full border border-slate-900 bg-gradient-to-b from-orange-300 to-orange-600 text-lg font-black text-slate-900 shadow-[inset_0_2px_4px_#fff6,0_8px_16px_#0008]';

export default function ActionButtons({ sendKey, disabled }) {
  return (
    <div className="flex flex-col items-end gap-5">
      <div className="flex gap-4">
        <motion.button whileTap={{ scale: 0.94 }} className={circle} onClick={() => sendKey('x')} disabled={disabled} aria-label="A button">A</motion.button>
        <motion.button whileTap={{ scale: 0.94 }} className={circle} onClick={() => sendKey('z')} disabled={disabled} aria-label="B button">B</motion.button>
      </div>
      <div className="flex gap-3">
        <motion.button whileTap={{ scale: 0.95 }} className="rounded-full bg-slate-700 px-5 py-2 text-xs uppercase tracking-widest" onClick={() => sendKey('Enter')} disabled={disabled} aria-label="Start button">Start</motion.button>
        <motion.button whileTap={{ scale: 0.95 }} className="rounded-full bg-slate-700 px-5 py-2 text-xs uppercase tracking-widest" onClick={() => sendKey('Shift')} disabled={disabled} aria-label="Select button">Select</motion.button>
      </div>
    </div>
  );
}
