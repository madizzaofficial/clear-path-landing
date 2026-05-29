/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.985 0.012 75)",
        foreground: "oklch(0.22 0.03 40)",
        primary: {
          DEFAULT: "oklch(0.66 0.14 45)",
          foreground: "oklch(0.99 0.01 80)",
          soft: "oklch(0.93 0.05 55)",
          muted: "oklch(0.86 0.08 50)",
        },
        muted: {
          DEFAULT: "oklch(0.95 0.015 70)",
          foreground: "oklch(0.5 0.03 45)",
        },
        border: "oklch(0.91 0.02 65)",
        cream: "oklch(0.965 0.025 75)",
        terracotta: "oklch(0.58 0.13 40)",
        peach: "oklch(0.88 0.07 55)",
        card: "oklch(0.995 0.006 80)",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px oklch(0.4 0.05 40 / 0.04), 0 8px 24px oklch(0.4 0.05 40 / 0.06)",
        elegant: "0 10px 40px -15px oklch(0.55 0.15 40 / 0.25)",
      },
    },
  },
  plugins: [],
};
