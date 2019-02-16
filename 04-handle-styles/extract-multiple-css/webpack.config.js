const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    foo: './src/scripts/foo.js',
    bar: './src/scripts/bar.js',
  },
  output: {
    filename: '[name].js',
  },
  mode: 'development',
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
    new htmlPlugin({ title: path.basename(__dirname) }),
    new ExtractTextPlugin('[name]@[contentHash:8].css')
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
