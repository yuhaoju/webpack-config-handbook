const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle@[chunkhash].js'
    },
    mode: 'production',
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
