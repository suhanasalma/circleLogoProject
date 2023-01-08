/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1500px",
    },
    colors: {
      black: "#222",
      white: "#C9CFDE",
      gray: "#CBD0DF",
      darkgray: "#808080",
    },
    extend: {},
  },
  plugins: [],
};
