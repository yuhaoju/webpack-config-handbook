const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: path.join(__dirname, './force-strict-loader'),
                    options: {
                        sourceMap: false
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
}
