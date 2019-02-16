const path = require('path');
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
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      }
    ],
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
