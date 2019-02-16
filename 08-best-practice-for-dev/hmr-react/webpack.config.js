const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react'],
          plugins: ['react-hot-loader/babel'],
        },
      }
    ],
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname) }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    hot: true,
    publicPath: '/dist/',
    port: 3000,
  },
};
