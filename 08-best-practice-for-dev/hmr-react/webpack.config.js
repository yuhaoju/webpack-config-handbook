const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  mode: 'development',
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
  devServer: {
    hot: true,
    publicPath: '/dist/',
    port: 3000,
  },
};
