/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      primary: "#9b1fe9",
      secondary: "#ecc94b",
      white: "#ffffff",
      gray: "#6d7380",
      grayWhite: "#6d7380",
    },
    extend: {},
    fontFamily: {
      varela: ["Varela Round", "sans-serif"],
    },
  },
  plugins: [],
};
