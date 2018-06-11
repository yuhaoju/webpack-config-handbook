const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    a: './a.js',
    b: './b.js',
    c: './c.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname), }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      chunks: ['a', 'b'],
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
