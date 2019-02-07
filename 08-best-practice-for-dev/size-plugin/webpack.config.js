const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const SizePlugin = require('size-plugin');

module.exports = {
  entry: {
    app: './app.js',
    pageA: './pageA.js',
    pageB: './pageB.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname), }),
    new SizePlugin()
  ],
  mode: 'development',
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
