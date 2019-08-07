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
    },

    updateEnv () {
      const development = {
        path: api.resolve('./.env.development'),
        content: `VUE_APP_API=http://localhost:3000/\nVUE_APP_DEBUG=true`
      }
      const staging = {
        path: api.resolve('./.env.staging'),
        content: `NODE_ENV=production\nVUE_APP_CDN=''\nVUE_APP_DEBUG=true`
      }
      const production = {
        path: api.resolve('./.env.production'),
        content: `VUE_APP_API=/\nVUE_APP_CDN=https://a05.xxx.com/\nVUE_APP_DEBUG=false`
      }

      fs.writeFileSync(
        development.path,
        development.content,
        { encoding: 'utf8' }
      )

      fs.writeFileSync(
        staging.path,
        staging.content,
        { encoding: 'utf8' }
      )

      fs.writeFileSync(
        production.path,
        production.content,
        { encoding: 'utf8' }
      )
    }
  }
}