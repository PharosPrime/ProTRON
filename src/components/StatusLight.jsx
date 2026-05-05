export default function StatusLight({ label, active, hue = 'cyan' }) {
  const activeClass =
    hue === 'orange'
      ? 'bg-orange-400 shadow-[0_0_12px_#fb923c]'
      : 'bg-cyan-400 shadow-[0_0_12px_#22d3ee]';

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-300">
      <span className={`h-3 w-3 rounded-full border border-slate-800 ${active ? activeClass : 'bg-slate-800'}`} aria-hidden />
      <span>{label}: {active ? 'Online' : 'Offline'}</span>
    </div>
  );
}
