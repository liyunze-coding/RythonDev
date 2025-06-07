import { defineConfig, passthroughImageService } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte()],

  server: {
      port: 8008,
      hostname: "RythonDev",
  },

  site: "https://rython.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    service: passthroughImageService(),
  },

});