const path = require('path')
module.exports = {
  outputDir: 'dist',
  css: {
    loaderOptions: {
      stylus: {
        import: '~assets/css/theme.styl'
      }
    }
  },
  configureWebpack: config => {
    Object.assign(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, './src'),
          "assets": path.resolve(__dirname, './src/assets')
        },
        extensions: [".js", ".vue"]
      }
    })
    if (process.env.NODE_ENV === 'production') {

    } else {

    }
  }
}