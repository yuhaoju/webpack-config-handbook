const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
