const path = require('path');

module.exports = {
    entry: './app.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000
    }
};
