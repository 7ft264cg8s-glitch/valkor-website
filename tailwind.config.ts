import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        valkor: {
          bg: "#0B1020",
          secondary: "#111827",
          panel: "#0F172A",
          orange: "#F97316",
          orangeDark: "#EA580C",
          text: "#F3F4F6",
          muted: "#9CA3AF",
          success: "#34D399",
          warning: "#F59E0B"
        }
      },
      boxShadow: {
        glow: "0 24px 90px rgba(249, 115, 22, 0.14)",
        panel: "0 22px 70px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "radial-field":
          "radial-gradient(circle at 18% 12%, rgba(249,115,22,0.12), transparent 26%), radial-gradient(circle at 82% 18%, rgba(52,211,153,0.07), transparent 28%), linear-gradient(180deg, #0B1020 0%, #111827 55%, #0B1020 100%)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
