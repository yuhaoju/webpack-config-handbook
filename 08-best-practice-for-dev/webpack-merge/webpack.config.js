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
    new htmlPlugin({ title: path.basename(__dirname) })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
