import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        midnight: "#0b1020",
        panel: "#111827",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.2), 0 20px 50px rgba(91, 65, 171, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
