const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app.js',
    list: './components/list',
    detail: './components/detail',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
plugins: [new htmlPlugin({ title: path.basename(__dirname), })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
