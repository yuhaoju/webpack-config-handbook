const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        foo: './foo.js',
        bar: './bar.js',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: 3
        })
    ],
    devServer: {
        publicPath: '/dist/',
        port: 3000
    },
}
