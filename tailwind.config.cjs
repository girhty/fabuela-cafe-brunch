/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        surface: '#171715',
        cream: '#F1F1EF',
        creamDark: '#E7E5E3',
        amber: '#D58C3D',
        amberDeep: '#B07A45',
        roast: '#6E3E22',
        crema: '#C69B6E',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      animation: {
        'pulse-dot': 'pulseDot 1.8s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'drift': 'drift 18s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-14px,0) rotate(6deg)' },
        },
      },
    },
  },
  plugins: [],
};