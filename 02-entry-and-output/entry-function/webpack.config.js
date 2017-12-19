const path = require('path');

module.exports = {
    entry: () => ({
        'partA': './partA.js',
        'partB': './partB.js',
        'index': ['babel-polyfill', './index.js'],
    }),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
