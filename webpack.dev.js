require('dotenv').config()

const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const { PORT } = process.env

const config = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    compress: true,
    static: {
      directory: resolve(__dirname, 'dist/assets'),
      watch: true
    },
    historyApiFallback: true,
    port: 8081,
    host: 'localhost',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    proxy: {
      context: ['/api'],
      target: `http://localhost:${PORT || 8080}`,
      changeOrigin: true,
      secure: false,
      ws: false
    }
  }
}

module.exports = merge(common, config)
