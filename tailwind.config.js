/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#D10A10",
      secondary: "#fff5f4",
      pinkberry: '#ffd2d2'
    },
    fontFamily: {
      Monserrat: ["Monserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

