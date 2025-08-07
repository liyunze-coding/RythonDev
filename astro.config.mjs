import { defineConfig, passthroughImageService } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), svelte(), react()],

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
