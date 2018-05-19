const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            IS_PRODUCTION: true,
            ENV_ID: 130912098,
            CONSTANTS: {
                TYPES: JSON.stringify(['foo', 'bar'])
            }
        })
    ],
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
