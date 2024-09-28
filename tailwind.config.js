/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#152542',
        },
        secondary: {
          DEFAULT: '#272C40',
        },
        accent: {
          DEFAULT: '#C0B596',
        },
      },
    },
  },
  plugins: [],
}