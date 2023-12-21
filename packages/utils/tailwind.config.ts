/** @type {import('tailwindcss').Config} */

export const mainTailwindConfig = {
    content: [
        "../../apps/web/app/**/*.{js,ts,jsx,tsx}",
        "../../apps/web/components/**/*.{js,ts,jsx,tsx}",
        "../../apps/web/shared/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/**/*.{ts,tsx}",
        "../../packages/utils/**/*.{ts,tsx}",
    ],
    theme: {
        colors: {},
        plugins: [],
    },
};

export default mainTailwindConfig;
