/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'nice-gray': 'rgb(36,36,40)',
      },
    },
  },
  plugins: [],
}