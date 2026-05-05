import { Power, RotateCcw, Eject, FolderOpen, Scale, Shield } from 'lucide-react';

export default function SystemButtons({ poweredOn, hasRom, onPower, onLoadRom, onReset, onExit, onSettings, onLegal }) {
  const base = 'inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40';

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      <button className={base} onClick={onPower} aria-label="Power">
        <Power size={16} /> {poweredOn ? 'Power Off' : 'Power On'}
      </button>
      <button className={base} onClick={onLoadRom} disabled={!poweredOn} aria-label="Load ROM"><FolderOpen size={16} /> Load ROM</button>
      <button className={base} onClick={onReset} disabled={!poweredOn || !hasRom} aria-label="Reset emulator"><RotateCcw size={16} /> Reset</button>
      <button className={base} onClick={onExit} disabled={!hasRom} aria-label="Exit ROM"><Eject size={16} /> Exit</button>
      <button className={base} onClick={onSettings} aria-label="Open service hatch"><Scale size={16} /> Service Hatch</button>
      <button className={base} onClick={onLegal} aria-label="Open legal notice"><Shield size={16} /> Legal</button>
    </div>
  );
}
