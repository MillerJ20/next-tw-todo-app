/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'apple': 'Inter, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif'
    }
  },
  plugins: [],
}
