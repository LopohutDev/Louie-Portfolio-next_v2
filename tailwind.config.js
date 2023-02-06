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
        infiniteTextScroll: {
          'from': {
            transform: 'translateX(100%)'
          },
          'to': {
            transform: 'translateX(-100%)'
          }
        }
      }
    },
  },
  plugins: [],
}
