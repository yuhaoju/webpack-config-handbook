module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle@[chunkhash].js',
  },
  mode: 'production',
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
