const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'asset'),
    filename: 'bundle.js',
  },
  mode: 'development',
  // plugins: [new htmlPlugin({ title: path.basename(__dirname), })],
  devServer: {
    port: 3000,
  },
};
