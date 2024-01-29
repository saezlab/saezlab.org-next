import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://saezlab.github.io',
  base: '/saezlab.org-next',
  integrations: [svelte()]
});
