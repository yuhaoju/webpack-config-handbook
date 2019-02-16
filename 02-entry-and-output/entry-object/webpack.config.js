const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    list: './src/components/list',
    detail: './src/components/detail',
  },
  output: { filename: '[name].js' },
  mode: 'development',
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
