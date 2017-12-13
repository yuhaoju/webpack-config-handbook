const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');

const babelQuery = {
    presets: [
        [
            'env', {
                modules: false,
                targets: {
                    browsers: [
                        '> 1%',
                        'last 3 versions'
                    ]
                }
            }
        ],
        'react'
    ]
}

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['happypack/loader']
        }]
    },
    plugins: [
        new HappyPack({
            loaders: [
                {
                    loader: 'babel-loader',
                    query: babelQuery
                }
            ]
        })
    ],
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
