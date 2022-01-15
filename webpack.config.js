const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  devServer: {
    compress: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'build')
    }
  },
  entry: ['./src/index.tsx'],
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.(tsx|ts)$/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript'
              }
            }
          }
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './build')
  },
  plugins: [
    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
      fix: true
    }),
    new HTMLWebpackPlugin({
      filename: './index.html',
      template: path.join(__dirname, 'public/index.html')
    })
  ]
};
