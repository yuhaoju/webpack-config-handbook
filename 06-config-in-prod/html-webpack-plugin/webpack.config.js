const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle@[chunkhash].js',
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
