const path = require('path');
const loaderUtils = require('loader-utils');

function loader(source) {
  // 1. 拿到文件扩展名
  let ext = path.extname(this.resourcePath);

  // 2. 生成带 hash 名的路径
  let hashName = loaderUtils.interpolateName(this, `[hash]${ext}`, {content: source});

  // 3. 生成文件
  this.emitFile(hashName, source);

  return `module.exports = ${JSON.stringify(hashName)}`;
}

loader.raw = true;    // 处理文件要设置 source 是 buffer 类型

module.exports = loader;