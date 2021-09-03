module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluey: '#232946',
        whitey: '#fffffe',
        bgBluey: '#374170',
        pinky: '#eebbc3',
        greyish: '#b8c1ec',
        bGreyish: '#b8c1eca1'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
