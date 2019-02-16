const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: () => ({
    partA: './src/partA.js',
    partB: './src/partB.js',
    index: ['babel-polyfill', './src/index.js'],
  }),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
