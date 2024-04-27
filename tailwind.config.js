/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('./assets/backgroundimg.webp')",
      }
    },
  },
  plugins: [],
}