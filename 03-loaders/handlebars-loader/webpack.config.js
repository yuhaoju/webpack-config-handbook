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
                test: /\.handlebars/,
                use: 'handlebars-loader'
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
