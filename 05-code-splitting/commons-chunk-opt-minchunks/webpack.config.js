const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    foo: './foo.js',
    bar: './bar.js',
    vendor: ['react'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname) }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: 3,
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
