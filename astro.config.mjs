import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';
import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://fionahsu51.github.io',
  integrations: [mdx(), svelte(), react(), preact()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  }
});