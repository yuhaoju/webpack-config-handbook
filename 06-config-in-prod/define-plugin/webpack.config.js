const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'porduction',
  plugins: [
    new webpack.DefinePlugin({
      IS_PRODUCTION: true,
      ENV_ID: 130912098,
      CONSTANTS: {
        TYPES: JSON.stringify(['foo', 'bar']),
      },
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
