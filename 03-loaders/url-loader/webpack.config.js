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
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: '[name].[ext]',
                        publicPath: './assets-path/'
                    }
                }
            }
        ]
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
}
