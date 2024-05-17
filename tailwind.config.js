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
        primary: "#8555EF",
        secondary: "#6A39EC",
        lightText: "#F9F8FC",
        darkPurple: "#1E095B",
        gray: "#E5E5E5",
        grayAlt: "#1D1B27",
        darkGray: "#1D1B27",
        lightpurple: "#E9DEF8",
      },

      backgroundImage: {
        home: "url('/home-bg.png')",
      },
    },
  },
  plugins: [],
};
