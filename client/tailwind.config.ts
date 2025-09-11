import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <-- important
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pale: "#fdf7fa",
        night: "#121212",
        sakura: "#F5BABB",
        matcha: "#5aa89c",
        forest: "#2C6D63",
        rose: "#f3dfe0",
      },
      fontFamily: {
        heading: ["'Noto Sans JP'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
