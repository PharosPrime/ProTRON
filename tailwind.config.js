/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#090b12',
        gunmetal: '#1b2433',
        graphite: '#2c3548',
        neon: '#22d3ee',
        ember: '#f97316',
      },
      boxShadow: {
        bezel: 'inset 0 2px 2px #64748b55, inset 0 -8px 16px #020617cc, 0 15px 40px #020617aa',
      },
    },
  },
  plugins: [],
};
