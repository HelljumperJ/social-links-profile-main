/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./assets/**/*.{html,js}", '*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: []
  },
}

