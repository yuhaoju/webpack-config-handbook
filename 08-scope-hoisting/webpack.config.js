const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
