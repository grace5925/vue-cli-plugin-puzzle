module.exports = {
  plugins: {
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore'],
      minPixelValue: 1,
      mediaQuery: false
    },
    'postcss-viewport-units': {},
    'cssnano': {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}
