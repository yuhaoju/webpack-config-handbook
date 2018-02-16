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
                enforce: 'pre',
                use: 'eslint-loader'
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
