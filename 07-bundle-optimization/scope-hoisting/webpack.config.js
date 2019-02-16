const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: './dist/',
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        loaders: [
            {
                test: /\.css/,
                loader: 'style-loader!css-loader',
            }
        ],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    devServer: {
        publicPath: '/dist/',
        port: 3000,
    },
};
