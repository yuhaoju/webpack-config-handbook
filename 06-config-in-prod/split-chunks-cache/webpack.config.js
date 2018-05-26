const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        pageA: './pageA.js',
        pageB: './pageB.js',
        pageC: './pageC.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]@[chunkhash].js'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true
        }
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
