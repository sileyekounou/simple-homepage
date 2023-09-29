/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

