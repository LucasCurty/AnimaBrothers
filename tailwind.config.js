/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      maxHeight:{
        '128':'36rem',
      }
    },
  },
  plugins: [],
}
