import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        hind: [
          "var(--font-hind-madurai)",
          "Hind Madurai",
          "Hind Madurai Placeholder",
          "sans-serif",
        ],
        serif: [
          "var(--font-instrument-serif)",
          "Instrument Serif",
          "Instrument Serif Placeholder",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
