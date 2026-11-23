import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: { DEFAULT: "#12356B", 700: "#1B4A8F", 500: "#2A63B5" }, amber: { DEFAULT: "#F2B632", soft: "#FBEBC0" }, sand: "#FAF6EA" },
    fontFamily: { serif: ["Avenir Next", "Segoe UI", "Trebuchet MS", "system-ui", "sans-serif"], sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
