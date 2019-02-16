const HappyPack = require('happypack');

const babelQuery = {
  presets: [
    [
      'env',
      {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 3 versions'],
        },
      }
    ],
    'react'
  ],
};

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    publicPath: './dist/',
    filename: '[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['happypack/loader'],
      }
    ],
  },
  plugins: [
    new HappyPack({
      loaders: [
        {
          loader: 'babel-loader',
          query: babelQuery,
        }
      ],
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
