function loader(source) {
  let script = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `;

  console.log('style-loader source: ', source)

  return script;
}

module.exports = loader;