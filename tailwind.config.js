/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6700',
        lightGray: '#777777',
        darkGray: '#333333',
      },
    },
  },
  plugins: [],
};