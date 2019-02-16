module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: './dist/',
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'style-loader!css-loader',
      }
    ],
  },
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
