/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        outlinePing: {
          "0%": { outlineOffset: "0px", outlineColor: "#dc2626" },
          "100%": { outlineOffset: "8px", outlineColor: "rgba(0, 0, 0, 0)" },
        },
      },
      animation: {
        colorfull: "colorfull 0.3s ease-in-out",
        borderPing: "borderPing 0.7s ease-out",
        outlinePing: "outlinePing 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
