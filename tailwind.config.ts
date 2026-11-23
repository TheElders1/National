import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: { DEFAULT: "#0F3B2E", 700: "#17503F", 500: "#1F6A54" }, amber: { DEFAULT: "#E8A317", soft: "#FBE7B5" }, sand: "#FBF6EA" },
    fontFamily: { serif: ["Avenir Next", "Segoe UI", "Trebuchet MS", "system-ui", "sans-serif"], sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
