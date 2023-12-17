/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2EADC",
        secondary: "#b1e9cf",
      },
      boxShadow: {
        primary: "5px 5px 0px 5px black",
      },
    },
  },
  plugins: [],
};
