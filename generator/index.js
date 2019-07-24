module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    scripts: {
      "build:test": "vue-cli-service build --dest a04 --mode staging",
      "lint": "vue-cli-service lint --fix"
    },
    devDependencies: {
      "image-webpack-loader": "^5.0.0"
    }
  })

  api.render({
    './.vscode/settings.json': './templates/.vscode/settings.json',
    './public/index.html': './templates/public/index.html',
    './src/assets/scss/_variables.scss': './templates/src/assets/scss/_variables.scss',
    './src/App.vue': './templates/src/App.vue',
    './.env.development': './templates/.env.development',
    './.env.production': './templates/.env.production',
    './.env.staging': './templates/.env.staging',
    './.gitignore': './templates/.gitignore',
    './.yarnrc': './templates/.yarnrc',
    './vue.config.js': './templates/vue.config.js'
  })
}