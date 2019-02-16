const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    partA: './src/partA.js',
    partB: './src/partB.js',
  },
  output: { filename: '[name].js' },
  mode: 'development',
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
