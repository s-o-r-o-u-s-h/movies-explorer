const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin(['babel-plugin-styled-components'], {
    ssr: false,
    fileName: false,
  }),
);
