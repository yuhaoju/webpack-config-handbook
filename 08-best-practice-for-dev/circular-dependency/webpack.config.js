const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
