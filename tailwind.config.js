const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        ja: ["Zen Kaku Gothic New", ...defaultTheme.fontFamily.sans],
        en: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}