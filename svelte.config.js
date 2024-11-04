import { vitePreprocess } from "@astrojs/svelte";

export default {
    preprocess: vitePreprocess(),
    compilerOptions: {
        compatibility: {
            componentApi: 4,
        },
    },
};
