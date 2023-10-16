/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        "primary" : "#000308",
        "secondary": "#02f3f3",
        "tertiary" : "#272f39",
        "bb" : "#101922",
        "light" : "#f0f0f1",
        "lblack" : "#080d13"
      },
      fontFamily:{
        nunito: "Nunito Sans",
      }
    },
  },
  plugins: [],
}