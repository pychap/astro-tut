import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // when my site is live, I'll update this to the real URL
  site: "https://py-chapman.netlify.app/",
  integrations: [preact(), tailwind()]
});