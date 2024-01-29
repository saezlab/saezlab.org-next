import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://saezlab.github.io',
  base: '/saezlab.org-next',
  integrations: [svelte(), mdx()]
});
