const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath:'xuni',
    filename: 'bundle.js',
  },
  devServer:{
    port:8080,
    contentBase:'src'
  }
};