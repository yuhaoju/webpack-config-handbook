const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.js',
        vendor: ['react'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        })
    ],
    devServer: {
        publicPath: '/dist/',
        port: 3000,
    },
};
