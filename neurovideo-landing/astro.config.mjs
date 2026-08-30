import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://neurovideo.ratacrm.ru',
  output: 'static',
  integrations: [sitemap()],
});
