/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        roast: '#070707',
        surface: '#171715',
        surface2: '#0F0E0C',
        crema: '#D58C3D',
        crema2: '#B07A45',
        bone: '#F1F1EF',
        bone2: '#E7E5E3',
        ember: '#6E3E22',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'xtight': '-0.03em',
        'tighter2': '-0.05em',
      },
      animation: {
        'pulse-dot': 'pulseDot 1.8s ease-in-out infinite',
        'drift-slow': 'driftSlow 18s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(213,140,61,0.6)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 0 8px rgba(213,140,61,0)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) translateX(8px) rotate(6deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};