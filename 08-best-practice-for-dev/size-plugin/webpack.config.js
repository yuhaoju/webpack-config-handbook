const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const SizePlugin = require('size-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    pageA: './src/pageA.js',
    pageB: './src/pageB.js',
  },
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname) }),
    new SizePlugin()
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
