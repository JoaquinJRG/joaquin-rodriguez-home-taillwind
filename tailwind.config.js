/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "color-secundario" : "#ECE9EA",
        "color-texto" : "#0E235D",
        "color-destacado" : "#024fff",
        "color-fondo2": "#47A9FF",
        "color-fondo3": "#AEDBFF",
        "color-fondo4": "#D6EBFF",
      },
      fontFamily: {
        "mont": ['Montserrat', "sans-serif"],
        "barlow": ["Barlow Condensed", "sans-serif"]
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}

