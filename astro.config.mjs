// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "mm"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  trailingSlash: "never",
  integrations: [react(), tailwind(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
