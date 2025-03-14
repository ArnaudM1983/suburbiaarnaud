import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "#4876ff",
                "brand-lime": "#d9f154",
                "brand-navy": "#2e3192",
                "brand-orange": "#ff7347",
                "brand-pink": "#f7d0e9",
                "brand-purple": "#692e54",
                "brand-gray": "#fffdf9",
            },
            fontFamily: {
                sans: ['var(--font-bowlby-sc)'],
                mono: ['var(--font-dm-mono)'],
            },
        }
    }
} satisfies Config;