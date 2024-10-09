import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site: process.env.ENV == 'production' ? 'https://iamgroooooot.github.io' : 'http://localhost:4321',
  base: process.env.ENV == 'production' ? 'astro-devlog/' : '',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
