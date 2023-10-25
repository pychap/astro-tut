import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // when my site is live, I'll update this to the real URL
  site: "https://peterchapman.me",
  integrations: [preact()]
});