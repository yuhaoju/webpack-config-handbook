const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: '[name].js',
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname), })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
