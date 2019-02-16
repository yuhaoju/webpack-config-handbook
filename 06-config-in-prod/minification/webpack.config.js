const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                /* your config */
            })
        ],
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000,
    },
};
