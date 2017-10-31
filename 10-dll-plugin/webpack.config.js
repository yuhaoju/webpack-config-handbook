const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(path.join(__dirname, 'dll/manifest.json'))
        })
    ],
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
