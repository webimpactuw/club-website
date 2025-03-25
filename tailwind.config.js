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
        grayLight: "#F9F8FC",
        darkGray: "#1D1B27",
        lightPurple: "#E9DEF8",
        lightGreen: "#D1FFBD",
        lightBlue: "#90D5FF",
      },

      backgroundImage: {
        home: "url('/home-bg.png')",
      },
    },
  },
  plugins: [],
};
