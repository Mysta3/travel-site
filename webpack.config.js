const path = require('path');

const postCSSplugins = [
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
];

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js', //controls filename generated
    path: path.resolve(__dirname, 'app'),
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i, //only interested in files that end in .css
        use: [
          'style-loader',
          'css-loader?url=false',
          { loader: 'postcss-loader', options: { plugins: postCSSplugins } },
        ], //style loader applies css styling, css=loader allows us to use css
      },
    ],
  },
};
