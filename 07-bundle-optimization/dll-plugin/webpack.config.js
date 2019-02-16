const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    util: './src/util.js',
  },
  output: {
    publicPath: './dist/',
    filename: '[name]@[chunkhash].js',
  },
  mode: 'development',
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname, 'dll/manifest.json')),
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
