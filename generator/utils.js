const fs = require('fs')

module.exports = api => {
  return {
    getMain() {
      const tsPath = api.resolve('src/main.ts')
      return fs.existsSync(tsPath) ? 'src/main.ts' : 'src/main.js'
    },

    updatePostcss (callback) {
      let config, configPath

      const rcPath = api.resolve('./postcss.config.js')
      const pkgPath = api.resolve('./package.json')
      if (fs.existsSync(rcPath)) {
        configPath = rcPath
        config = callback(require(rcPath))
      } else if (fs.existsSync(pkgPath)) {
        configPath = pkgPath
        config = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf8' }))
        config.postcss = callback(config.postcss || {})
      }

      if (configPath) {
        const moduleExports = configPath !== pkgPath ? 'moduleexports = ' : ''
        fs.writeFileSync(
          configPath,
          `${moduleExports}${JSON.stringify(config, null, 2)}`,
          { encoding: 'utf8' }
        )
      }
    },

    updateBabelConfig (callback) {
      let config, configPath

      const rcPath = api.resolve('./babel.config.js')
      const pkgPath = api.resolve('./package.json')
      if (fs.existsSync(rcPath)) {
        configPath = rcPath
        config = callback(require(rcPath))
      } else if (fs.existsSync(pkgPath)) {
        configPath = pkgPath
        config = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf8' }))
        config.babel = callback(config.babel || {})
      }

      if (configPath) {
        const moduleExports = configPath !== pkgPath ? 'module.exports = ' : ''
        fs.writeFileSync(
          configPath,
          `${moduleExports}${JSON.stringify(config, null, 2)}`,
          { encoding: 'utf8' }
        )
      }
    }
  }
}