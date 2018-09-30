const less = require('less');

function loader(source) {
  let callback = this.async();    // 可以异步调用 callback
  let targetFileName = this.resourcePath.split('/').pop();   // 直接拿到当前文件名，通过 this.request 和 this.resourcePath 也可以间接拿到文件名

  less.render(source, {filename: this.resource}, (err, output) => {
    // output => { css: 'body h3 {\n  color: red;\n}\n', imports: [] }
    callback(err, output.css);
  });
}

module.exports = loader;