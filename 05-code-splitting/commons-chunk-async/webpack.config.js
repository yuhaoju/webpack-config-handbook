const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './foo.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'foo.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
        })
    ],
    devServer: {
        publicPath: '/dist/',
        port: 3000
    },
}
