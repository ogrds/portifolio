/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
        jost: "Jost",
      }
    },
    colors: {
      ...colors,
      primary: "#82f9a1",
      shadow_primary: "#82f9a114",
      yellow: "#fbff1e",
    }
  },
  plugins: [],
}
