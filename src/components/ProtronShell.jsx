import { useEffect, useRef, useState } from 'react';
import EmulatorScreen from './EmulatorScreen';
import ControlPad from './ControlPad';
import ActionButtons from './ActionButtons';
import SystemButtons from './SystemButtons';
import StatusLight from './StatusLight';
import LegalModal from './LegalModal';
import SettingsModal from './SettingsModal';
import QuickStartModal from './QuickStartModal';

const LEGAL = '“ProTRON-X does not include, distribute, host, or provide commercial game ROMs. This project is designed for legally obtained homebrew, freeware, public-domain, or personally authorized Game Boy Advance-compatible ROM files. Users are responsible for ensuring they have the legal right to use any ROM they load.”';

export default function ProtronShell() {
  const [poweredOn, setPoweredOn] = useState(false);
  const [rom, setRom] = useState(null);
  const [resetNonce, setResetNonce] = useState(0);
  const [legalOpen, setLegalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [dataPath, setDataPath] = useState(() => localStorage.getItem('protronx-path') || '/emulatorjs/data/');
  const [quickStartOpen, setQuickStartOpen] = useState(() => localStorage.getItem('protronx-seen-help') !== '1');
  const inputRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => localStorage.setItem('protronx-path', dataPath), [dataPath]);
  useEffect(() => () => rom?.url && URL.revokeObjectURL(rom.url), [rom]);

  const clearRom = () => {
    if (rom?.url) URL.revokeObjectURL(rom.url);
    setRom(null);
  };

  const handlePower = () => {
    if (poweredOn) {
      clearRom();
      setResetNonce((n) => n + 1);
      setPoweredOn(false);
      return;
    }
    setPoweredOn(true);
  };

  const loadRom = (file) => {
    if (!file) return;
    if (rom?.url) URL.revokeObjectURL(rom.url);
    setRom({ name: file.name, size: file.size, url: URL.createObjectURL(file) });
    setResetNonce((n) => n + 1);
  };

  const sendKey = (key) => {
    const target = iframeRef.current?.contentWindow;
    iframeRef.current?.focus();
    if (!target) return;
    target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    setTimeout(() => target.dispatchEvent(new KeyboardEvent('keyup', { key, bubbles: true })), 80);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1e293b,#020617)] p-4 text-slate-100 md:p-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-700 bg-gradient-to-b from-gunmetal to-abyss p-5 shadow-bezel">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-black tracking-widest text-cyan-300">ProTRON-X</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Broken Fork Labs Interface Build</p>
          </div>
          <div className="text-right text-xs uppercase tracking-widest text-slate-400">
            <p>MGBA Core Bay</p><p>320 × 240 Native Signal</p><p>Firmware v1.0.0</p>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[1fr_2fr_1fr]">
          <div className="panel"><ControlPad sendKey={sendKey} disabled={!poweredOn || !rom} /></div>
          <div className="panel">
            <div className="screen-wrap"><EmulatorScreen poweredOn={poweredOn} rom={rom} resetNonce={resetNonce} dataPath={dataPath} iframeRef={iframeRef} /></div>
            <div className="mt-4 flex flex-wrap justify-between gap-2 text-xs">
              <StatusLight label="Power" active={poweredOn} />
              <StatusLight label="Cart" active={!!rom} hue="orange" />
              <StatusLight label="Core" active={poweredOn && !!rom} />
            </div>
          </div>
          <div className="panel items-end"><ActionButtons sendKey={sendKey} disabled={!poweredOn || !rom} /></div>
        </div>

        <div className="mt-5 rounded-lg border border-slate-700 bg-slate-900/80 p-3 text-sm">
          <p className="font-semibold text-cyan-300">Cartridge Slot Readout</p>
          <p>{rom ? `${rom.name} • ${(rom.size / 1024 / 1024).toFixed(2)} MB` : 'No cartridge loaded.'}</p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-300">{LEGAL}</p>

        <input ref={inputRef} className="hidden" type="file" accept=".gba,.bin" onChange={(e) => loadRom(e.target.files?.[0])} />
        <div className="mt-4">
          <SystemButtons poweredOn={poweredOn} hasRom={!!rom} onPower={handlePower} onLoadRom={() => inputRef.current?.click()} onReset={() => setResetNonce((n) => n + 1)} onExit={clearRom} onSettings={() => setSettingsOpen(true)} onLegal={() => setLegalOpen(true)} />
          <button className='mt-3 text-xs text-cyan-300 underline' onClick={() => setQuickStartOpen(true)}>Browser Quick Start</button>
        </div>
      </div>
      <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} />
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} dataPath={dataPath} onChangePath={setDataPath} />
      <QuickStartModal open={quickStartOpen} onClose={() => { localStorage.setItem('protronx-seen-help', '1'); setQuickStartOpen(false); }} />
    </div>
  );
}
