const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.js',
        page: './page.js',
        c: './c.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
            cacheGroups: {
                vendors: false,
                vendorstest: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
