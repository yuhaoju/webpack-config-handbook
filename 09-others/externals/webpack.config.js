const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    externals: {
        jquery: 'window.$',
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000,
    },
};
