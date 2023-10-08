/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
  extend: {
    colors: {
      borderColor: "#27374D",
      textColor: "#DDE6ED",
      foreColor: "#526D82",
      toggleColor: "#9DB2BF",
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'], // změní barvu jakmile se aktivuje checked
    },
  },
  },
  plugins: [],
  }
  