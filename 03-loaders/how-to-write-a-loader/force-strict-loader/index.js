// force-strict-loader/index.js
var loaderUtils = require("loader-utils");
var SourceNode = require("source-map").SourceNode;
var SourceMapConsumer = require("source-map").SourceMapConsumer;

module.exports = function(content, sourceMap) {
    var useStrictPrefix = '\'use strict\';\n\n';
    if (this.cacheable) {
        this.cacheable();
    }
    // source-map
    var options = loaderUtils.getOptions(this) || {};
    if (options.sourceMap && sourceMap) {
        var currentRequest = loaderUtils.getCurrentRequest(this);
        var node = SourceNode.fromStringWithSourceMap(
            content,
            new SourceMapConsumer(sourceMap)
        );
        node.prepend(useStrictPrefix);
        var result = node.toStringWithSourceMap({file: currentRequest});
        this.callback(null, result.code, result.map.toJSON());
        return;
    }
    // 处理 content
    return useStrictPrefix + content;
}

// module.exports = function(content) {
//   获取 loader 配置项
//   对 content 进行处理
// 	var handler = function() { /* 实现对 content 的转换 */ }
// 	var nextContent = handler(content);
//   返回转换后的内容
// 	return nextContent;
// }
