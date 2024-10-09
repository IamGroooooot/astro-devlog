import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site: 'https://iamgroooooot.github.io',
  // process.env.VERCEL_ENV === 'production'
  //   ? 'https://brutal.elian.codes/'
  //   : process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}/`
  //   : 'https://localhost:3000/',
  base: process.env.ENV == 'production' ? 'main' : '',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
