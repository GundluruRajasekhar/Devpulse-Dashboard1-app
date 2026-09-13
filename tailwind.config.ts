import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0D1016",
          900: "#12151C",
          800: "#1A1E28",
          700: "#232733",
          600: "#2E3341",
          500: "#454B5C",
        },
        ink: {
          100: "#F3F4F6",
          200: "#E8EAED",
          400: "#9AA1B2",
          500: "#767D8F",
        },
        amber: {
          400: "#F5B94D",
          500: "#F5A623",
          600: "#D98A0F",
        },
        teal: {
          400: "#6EE0D3",
          500: "#4FD1C5",
        },
        coral: {
          400: "#F0707A",
          500: "#E5484D",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B6EF0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "10px",
        pill: "999px",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.03) inset",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.4s linear infinite",
        "fade-in": "fade-in 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
