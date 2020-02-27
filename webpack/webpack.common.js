const path = require('path');
const { resolve } = path;
// const resolve = require('path');

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  target: 'node',
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
};
