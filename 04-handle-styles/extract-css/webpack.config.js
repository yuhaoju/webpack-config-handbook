const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }
    ],
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname), }),
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
