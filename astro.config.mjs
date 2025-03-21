// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


import tailwindcss from '@tailwindcss/vite';


import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com',

  integrations: [sitemap({
    filter: (page) => !page.includes('/admin/'),
    // Add additional pages
    customPages: [
      'https://yourdomain.com/extra-page',
    ],
    // Custom sitemap configuration
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date()
  }), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});