const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'porduction',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        /* your config */
      })
    ],
  },
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
