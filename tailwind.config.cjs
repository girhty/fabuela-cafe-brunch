/** @type {import('tailwindcss').Config} */
// Palette inferred from @fabuela.iq imagery: deep olive-black interiors,
// matcha/pistachio greens (brand 💚), warm oat bread crust & crema tones,
// and porcelain-white plates.
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0C08',
        surface: '#161913',
        bone: '#F4F1EA',
        oat: '#E9E4D8',
        accent: '#C7D36B',
        crema: '#D9B77A',
        olive: {
          900: '#0E120C',
          800: '#23301B',
          600: '#56683A',
          300: '#CDBB8B',
        },
      },
      fontFamily: {
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Allura', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['"Noto Sans Arabic"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
};