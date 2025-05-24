/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], //daisyUi ke plugin ko import kiya gya hai
}

