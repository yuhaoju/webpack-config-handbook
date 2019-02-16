const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                targets: {
                  browsers: [
                    '> 1%',
                    'last 3 versions',
                    'ios 8',
                    'android 4.2',
                    'ie 9'
                  ],
                },
                useBuiltIns: 'usage',
              }
            ]
          ],
        },
      }
    ],
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
  mode: 'development',
};
