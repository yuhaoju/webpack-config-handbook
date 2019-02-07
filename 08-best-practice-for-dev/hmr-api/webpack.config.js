const path = require('path');
const webpack = require('webpack');
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
      }
    ],
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname), }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    hot: true,
    publicPath: '/dist/',
    port: 3000,
  },
};
