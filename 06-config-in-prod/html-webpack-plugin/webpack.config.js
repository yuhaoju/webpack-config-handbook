const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle@[chunkhash].js',
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
        })
    ],
    devServer: {
        publicPath: '/dist/',
        port: 3000,
    },
};
