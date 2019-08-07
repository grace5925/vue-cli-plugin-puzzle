module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    scripts: {
      "build:test": "vue-cli-service build --dest a04 --mode staging",
      "lint": "vue-cli-service lint --fix"
    },
    devDependencies: {
      "cssnano": "^4.1.10",
      "cssnano-preset-advanced": "^4.0.7",
      "postcss-cssnext": "^3.1.0",
      "postcss-px-to-viewport": "^1.1.1",
      "postcss-viewport-units": "^0.1.6",
      "viewport-units-buggyfill": "^0.6.2",
      "image-webpack-loader": "^5.0.0"
    }
  })

  api.render({
    './.vscode/settings.json': './templates/_vscode/settings.json',
    './public/index.html': './templates/public/index.html',
    './.env.development': './templates/_env.development',
    './.env.production': './templates/_env.production',
    './.env.staging': './templates/_env.staging',
    './.gitignore': './templates/_gitignore',
    './.yarnrc': './templates/_yarnrc',
    './vue.config.js': './templates/vue.config.js',
    './postcss.config.js': './template/postcss.config.js'
  })
}