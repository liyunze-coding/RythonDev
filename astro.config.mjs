import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    server: {
        port: 8008,
        hostname: "RythonDev",
    },
    site: "https://rython.dev",
});
