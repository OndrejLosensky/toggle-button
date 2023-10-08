/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
  extend: {
    colors: {
      whenNotChecked: "#a9cbf1",
      whenChecked: "#3487e4",
      borderColor: "#3487e4",
      buttonColor: "#ffffff",
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
  