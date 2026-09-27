import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/fabuela-cafe-brunch/',
  output: 'static',
  site: 'https://fabuela-cafe-brunch.pages.dev',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
});