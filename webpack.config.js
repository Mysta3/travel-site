const path = require('path');

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js', //controls filename generated
    path: path.resolve(__dirname, 'app'),
  },
  mode: 'development',
  watch: true,
};
