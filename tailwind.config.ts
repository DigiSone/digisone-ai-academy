import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      bg: "#07080c", surface: "#101219",
      accent: "#7c5cff", accent2: "#22d3ee",
      text: "#e9ebf2"
    }
  }},
  plugins: []
} satisfies Config;
