const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
