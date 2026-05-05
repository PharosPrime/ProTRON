import { motion } from 'framer-motion';

const btn = 'rounded-xl border border-slate-700 bg-gradient-to-b from-slate-500 to-slate-700 px-4 py-3 text-sm font-bold text-slate-100 shadow-md active:translate-y-[1px]';

export default function ControlPad({ sendKey, disabled }) {
  return (
    <div className="grid w-full max-w-52 grid-cols-3 gap-2" aria-label="D-Pad controls">
      <div />
      <motion.button whileTap={{ scale: 0.95 }} className={btn} onClick={() => sendKey('ArrowUp')} disabled={disabled} aria-label="Up">▲</motion.button>
      <div />
      <motion.button whileTap={{ scale: 0.95 }} className={btn} onClick={() => sendKey('ArrowLeft')} disabled={disabled} aria-label="Left">◀</motion.button>
      <div className="rounded-full border border-slate-700 bg-slate-900/70" />
      <motion.button whileTap={{ scale: 0.95 }} className={btn} onClick={() => sendKey('ArrowRight')} disabled={disabled} aria-label="Right">▶</motion.button>
      <div />
      <motion.button whileTap={{ scale: 0.95 }} className={btn} onClick={() => sendKey('ArrowDown')} disabled={disabled} aria-label="Down">▼</motion.button>
      <div />
    </div>
  );
}
