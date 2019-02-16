module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  externals: {
    jquery: 'window.$',
  },
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
