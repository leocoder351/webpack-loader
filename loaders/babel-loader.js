let babel = require('@babel/core');   // babel 核心包
let loaderUtils = require('loader-utils');    // loader 处理工具类

function loader(source) {   // source 是当前处理文件的源码
  
  // this 是指当前上下文环境
  // options 是在 webpack.config.js loader 配置中自己写的 option
  let options = loaderUtils.getOptions(this);

  // request 举例： /Users/xxxx/Documents/git/webpack-loader/loaders/babel-loader.js??ref--4!/Users/xxxx/Documents/git/webpack-loader/src/index.js
  // 可以通过 this.request 拿到处理的是哪个文件
  
  let request = this.request;
  let targetFileName = request.split('/').pop();

  // 调用 babel 转义，将 options 中自己写的 presets传入
  // 返回示例：babel.transform(code, options) // => { code, map, ast }
  let result = babel.transform(source, {
    ...options,
    sourceMap: true,
    filename: targetFileName
  });

  // loader 必须返回一个 字符串 或 Buffer
  this.callback(null, result.code, result.map);
};

module.exports = loader;