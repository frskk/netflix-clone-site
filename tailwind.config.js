/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: "#E50914",
          "red-dark": "#B20710",
          black: "#141414",
          gray: "#808080",
          "gray-dark": "#232323",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out",
        scaleIn: "scaleIn 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
