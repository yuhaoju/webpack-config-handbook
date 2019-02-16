const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.handlebars/,
        use: 'handlebars-loader',
      }
    ],
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname), })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
