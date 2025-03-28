/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                gradient: {
                    "0%": {
                        "background-position": "0% 50%",
                    },
                    "50%": {
                        "background-position": "100% 50%",
                    },
                    "100%": {
                        "background-position": "0% 50%",
                    },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                gradient: "gradient 15s ease infinite",
                fadeIn: "fadeIn 1s ease",
            },
        },
    },
    plugins: [],
};
