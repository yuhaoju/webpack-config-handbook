const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react'] // 所有想放入 vendor 的模块
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, 'dll/manifest.json')
        })
    ]
}
