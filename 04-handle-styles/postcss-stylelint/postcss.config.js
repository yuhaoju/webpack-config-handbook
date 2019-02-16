const stylelint = require('stylelint');
module.exports = {
  plugins: [
    stylelint({
      config: {
        rules: {
          'declaration-no-important': true,
        },
      },
    })
  ],
};
