const path = require('path');

module.exports = {
    entry: {
        app: './app.js',
        list: './components/list',
        detail: './components/detail'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
