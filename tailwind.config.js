const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluey: '#232946',
        whitey: '#fffffe',
        bgBluey: '#374170'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
