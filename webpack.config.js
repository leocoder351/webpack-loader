const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'loaders'),
      path.resolve(__dirname, 'node_modules'),
    ]
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader']
      },
      {
        test: /\.(jpeg|jpg|png|gif)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10*1024    // 10K
          }
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'less-loader']
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};