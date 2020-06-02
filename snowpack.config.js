var reactIs = require('react-is');
var lodash = require('lodash');

module.exports = {
  extends: '@snowpack/app-scripts-react',
  scripts: {},
  plugins: [],
  installOptions: {
    rollup: {
      namedExports: {
        'node_modules/@elastic/eui/node_modules/react-is/index.js': Object.keys(
          reactIs,
        ),
        'node_modules/lodash/lodash.js': Object.keys(lodash),
      },
    },
  },
};
