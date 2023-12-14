/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8555EF',
        'secondary': '#6A39EC',
        'light-text': '#F9F8FC',
        'dark-purple': '#1E095B',
        'gray': '#E5E5E5',
        'gray-secondary': '#1D1B27'
      },

      backgroundImage: {
        'home': "url('/home-bg.png')",
      },
    },
  },
  plugins: [],
};