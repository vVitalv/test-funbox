require('dotenv').config()

const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const config = {
  entry: './client/main.js',
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'client/index.html',
          to: '[name][ext]'
        },
        {
          from: 'client/html.js',
          to: '[name][ext]'
        },
        {
          from: 'client/assets/images',
          to: 'assets/images'
        },
        {
          from: 'client/assets/fonts',
          to: 'assets/fonts'
        }
      ]
    })
  ]
}

module.exports = config
