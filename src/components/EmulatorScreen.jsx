import { motion } from 'framer-motion';

export default function EmulatorScreen({ poweredOn, rom, resetNonce, dataPath, iframeRef }) {
  if (!poweredOn) {
    return <div className="screen-state">UNIT OFFLINE</div>;
  }

  if (!rom) {
    return (
      <motion.div className="screen-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-center">
          <p className="text-cyan-300">ProTRON-X Boot Sequence</p>
          <div className="mt-3 h-2 w-56 overflow-hidden rounded bg-slate-700">
            <motion.div className="h-full bg-cyan-400" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.8 }} />
          </div>
        </div>
      </motion.div>
    );
  }

  const srcDoc = `<!doctype html><html><body style="margin:0;background:#000;color:#fff;"><div id="game"></div><script>window.EJS_player='#game';window.EJS_core='gba';window.EJS_gameUrl='${rom.url}';window.EJS_gameName='${rom.name.replace(/'/g, "\\'")}';window.EJS_pathtodata='${dataPath}';window.EJS_startOnLoaded=true;window.EJS_color='#22d3ee';</script><script src='${dataPath}loader.js' onerror="document.body.innerHTML='<div style=\'padding:16px;font-family:sans-serif\'>EmulatorJS assets not found. Place loader.js and core files under public/emulatorjs/data/.</div>'"></script></body></html>`;

  return <iframe key={resetNonce} ref={iframeRef} title="ProTRON-X emulator screen" className="h-full w-full rounded-md" srcDoc={srcDoc} tabIndex={0} />;
}
