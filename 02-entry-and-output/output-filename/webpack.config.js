const path = require('path');

module.exports = {
    entry: {
        'partA': './partA.js',
        'partB': './partB.js',
        'index': './index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[chunkhash].js'
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
