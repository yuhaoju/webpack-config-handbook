document.write('partB.js: ');
document.write(
    global._babelPolyfill
        ? 'added babel-polyfill'
        : 'no global babel-polyfill'
);
document.write('<br/>');
