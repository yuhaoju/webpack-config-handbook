const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname) }),
    new DashboardPlugin()
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
