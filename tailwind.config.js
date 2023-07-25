const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ["'Anton'", defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};
