/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050804",
        forest: "#07120b",
        moss: "#102616",
        acid: "#baff21",
        cream: "#f1eadb",
        bone: "#c8c0ad",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      animation: {
        drift: "drift 18s ease-in-out infinite alternate",
        "drift-slow": "driftSlow 26s ease-in-out infinite alternate",
        pulsemark: "pulsemark 9s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(var(--mark-rotate))" },
          "100%": { transform: "translate3d(28px, -22px, 0) rotate(calc(var(--mark-rotate) + 7deg))" },
        },
        driftSlow: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(var(--mark-rotate)) scale(1)" },
          "100%": { transform: "translate3d(-34px, 26px, 0) rotate(calc(var(--mark-rotate) - 8deg)) scale(1.04)" },
        },
        pulsemark: {
          "0%, 100%": { opacity: "0.07" },
          "50%": { opacity: "0.14" },
        },
      },
    },
  },
  plugins: [],
};
