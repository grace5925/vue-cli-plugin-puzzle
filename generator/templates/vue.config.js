module.exports = {
  publicPath: process.env.VUE_APP_CDN,
  indexPath: 'index.html',
  productionSourceMap: false,
  transpileDependencies: [],
  css: {
    sourceMap: false
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args.map(item => {
          if (process.env.NODE_ENV === 'production') {
            item.minify = {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeAttributeQuotes: false,
              minifyCSS: true,
              minifyJS: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            }
          }
        })
        return args
      })
    <%_ if (options.compress) { _%>
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        disable: true
      })
      .end()
    <%_ } _%>
  }
}
