import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],

  server: {
      port: 8008,
      hostname: "RythonDev",
  },

  site: "https://rython.dev",

  vite: {
    plugins: [tailwindcss()],
  },
});