# ProTRON-X (v1.0)

ProTRON-X is a browser-based, skeuomorphic Game Boy Advance-compatible frontend that wraps EmulatorJS (mGBA core) in an iframe.

## Legal Notice

“ProTRON-X does not include, distribute, host, or provide commercial game ROMs. This project is designed for legally obtained homebrew, freeware, public-domain, or personally authorized Game Boy Advance-compatible ROM files. Users are responsible for ensuring they have the legal right to use any ROM they load.”

No commercial ROMs, Nintendo BIOS files, or copyrighted Nintendo assets are included.

## Browser-first usage (no terminal for players)

After the app is hosted, players use only a web browser:
1. Open the ProTRON-X URL.
2. Power On.
3. Load a local `.gba` or `.bin` ROM.
4. Play using keyboard or on-screen controls.

The app now includes a built-in **Browser Quick Start** modal for this flow.

## Setup for maintainers

```bash
npm install
npm run dev
npm run build
```

## EmulatorJS files

This repo includes placeholder folders under:

`public/emulatorjs/data/`

Place official EmulatorJS files there:
- `loader.js`
- `cores/`
- `wasm/`
- `shaders/`
- `storage/`

Default data path in ProTRON-X settings is `/emulatorjs/data/`.

## ROM handling

- ROMs are loaded from local disk only (`.gba` and `.bin`).
- ROMs are not uploaded.
- The app creates local object URLs and revokes them when ROMs are unloaded/replaced.
