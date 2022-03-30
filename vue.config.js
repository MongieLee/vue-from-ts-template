// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/theme/variables.less')
      ]
    }
  },
  devServer: {
    proxy: {
      '/boss': {
        target: 'http://devServer.com',
        changeOrigin: true
      }
    }
  }
}
