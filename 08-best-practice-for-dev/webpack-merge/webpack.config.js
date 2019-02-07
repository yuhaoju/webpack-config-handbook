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
    new htmlPlugin({ title: path.basename(__dirname), })
  ],
  mode: 'development',
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
