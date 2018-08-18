const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app.js',
    util: './util.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './dist/',
    filename: '[name]@[chunkhash].js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname, 'dll/manifest.json')),
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
  mode: 'development',
};
