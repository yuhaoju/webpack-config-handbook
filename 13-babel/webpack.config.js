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
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            modules: false, // 为了开启 tree-shaking
                            targets: {
                                browsers: [
                                    // 可以自定义兼容版本
                                    '> 1%',
                                    'last 3 versions',
                                    'ios 8',
                                    'android 4.2',
                                    'ie 9'
                                ]
                            },
                            useBuiltIns: 'usage'
                        }]
                    ],
                    plugins: []
                }
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
