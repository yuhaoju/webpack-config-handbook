const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: () => ({
    partA: './partA.js',
    partB: './partB.js',
    index: ['babel-polyfill', './index.js']
  }),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000
  }
};
