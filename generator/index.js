module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)
  const devDependencies = {
    "cssnano": "^4.1.10",
    "cssnano-preset-advanced": "^4.0.7",
    "postcss-cssnext": "^3.1.0",
    "postcss-px-to-viewport": "^1.1.1",
    "postcss-viewport-units": "^0.1.6",
    "viewport-units-buggyfill": "^0.6.2"
  }
  if (opts.compress) Object.assign(devDependencies, {
    "image-webpack-loader": "^5.0.0"
  })

  api.extendPackage({
    scripts: {
      "build:test": "vue-cli-service build --dest a04 --mode staging",
      "lint": "vue-cli-service lint --fix"
    },
    devDependencies
  })

  api.render({
    './.vscode/settings.json': './templates/_vscode/settings.json',
    './public/index.html': './templates/public/index.html',
    './.gitignore': './templates/_gitignore',
    './src/plugins/postcss.js': './templates/src/plugins/postcss.js',
    './vue.config.js': './templates/vue.config.js'
  })

  api.injectImports(utils.getMain(), `import './plugins/postcss.js'`)

  api.onCreateComplete(() => {

    utils.updateEnv()

    utils.updatePostcss(config => {
      const postcssPxToViewport = {
        viewportWidth: 750,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore'],
        minPixelValue: 1,
        mediaQuery: false
      }
      const cssnano = {
        "cssnano-preset-advanced": {
          zindex: false,
          autoprefixer: false
        }
      }

      config.plugins = {
        'postcss-cssnext': {},
        'postcss-viewport-units': {},
        'postcss-px-to-viewport': postcssPxToViewport,
        cssnano
      }
      return config
    })

    utils.updateHtml(rootOptions.projectName)
    
  })
}