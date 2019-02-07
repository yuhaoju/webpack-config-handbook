const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname), })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
});
