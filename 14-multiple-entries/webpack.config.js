const path = require('path');

module.exports = {
    entry: {
        app: './app.js', // 对象的 key 是入口名，value 是入口路径
        justEntryName: './components/list', // 入口名和实际路径并没有关系
        'multiple/dir/entry': './components/detail' // 入口名可以是路径，这样相应的输出也在多级路径中
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js' // 根据入口名来决定输出资源的名字
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
