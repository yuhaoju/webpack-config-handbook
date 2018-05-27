const postcssCssnext = require('postcss-cssnext');
module.exports = {
  plugins: [
    postcssCssnext({
      browsers: ['> 1%', 'last 2 versions'],
    })
  ],
};
