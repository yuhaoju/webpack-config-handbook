const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './foo.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'foo.js'
    },
    devtool: 'nosources-source-map',
    mode: 'production',
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
