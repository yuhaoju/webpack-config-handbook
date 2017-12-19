const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

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
    plugins: [
        new UglifyJSPlugin()
    ],
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
