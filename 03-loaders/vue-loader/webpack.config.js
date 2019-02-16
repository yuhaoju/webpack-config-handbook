const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ],
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
