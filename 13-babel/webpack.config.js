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
                options: { // 这部分配置可以改写为 JSON 形式放到 .babelrc 中，效果相同
                    presets: [
                        ['env', {
                            modules: false, // 为了开启 tree-shaking
                            targets: {
                                browsers: [ // 定义兼容的浏览器版本
                                    '> 1%',
                                    'last 3 versions',
                                    'ios 8',
                                    'android 4.2',
                                    'ie 9'
                                ]
                            },
                            useBuiltIns: 'usage' // 按需加载 polyfill
                        }]
                    ],
                    plugins: [] // 根据需求自定义
                }
            }
        ]
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
