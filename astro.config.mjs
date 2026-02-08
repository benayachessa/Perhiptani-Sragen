import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static";

import vitePwa from "@vite-pwa/astro";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "static",

  adapter: vercel({
    imageService: true,
  }),

  integrations: [vitePwa(), sitemap()],
});