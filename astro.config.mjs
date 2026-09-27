import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/fabuela-cafe-brunch/',
  output: 'static',
  site: 'https://fabuela-cafe-brunch.example.com',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    inlineStylesheets: 'auto',
  },
});