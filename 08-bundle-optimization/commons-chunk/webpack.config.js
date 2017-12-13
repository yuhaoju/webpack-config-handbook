const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        foo: './foo.js',
        bar: './bar.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        })
    ],
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
