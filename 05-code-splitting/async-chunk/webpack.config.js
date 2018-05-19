const path = require('path');
module.exports = {
    entry: {
        foo: './foo.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
