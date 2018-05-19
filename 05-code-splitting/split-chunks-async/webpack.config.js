const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './foo.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'foo.js',
        publicPath: '/dist/'
    },
    mode: 'development',
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
