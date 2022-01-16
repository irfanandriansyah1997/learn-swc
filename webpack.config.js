/* eslint-disable sort-keys-fix/sort-keys-fix */

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
  devtool: 'eval-source-map',
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
            // Enable source map
            sourceMaps: true,
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
  ],
  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, './src/assets/'),
      '@/components': path.resolve(__dirname, './src/components/'),
      '@/contract': path.resolve(__dirname, './src/contract/'),
      '@/features': path.resolve(__dirname, './src/features/'),
      '@/hooks': path.resolve(__dirname, './src/hooks/'),
      '@/interface': path.resolve(__dirname, './src/interface/'),
      '@/pages': path.resolve(__dirname, './src/pages/'),
      '@/routing': path.resolve(__dirname, './src/routing/'),
      '@/styles': path.resolve(__dirname, './src/styles/'),
      '@': path.resolve(__dirname, './src/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
