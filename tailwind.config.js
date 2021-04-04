module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "catamaran": ['Catamaran'],
      "merri": ['"Merriweather Sans"']
    },
    extend: {
      colors: {
        "theme-white": "#F2F2F2",
        "theme-black": "#0F0F0F",
        "theme-yellow": "#EDB831"
      },
      zIndex: {
        "under": -1,
        "under-10": -10
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
