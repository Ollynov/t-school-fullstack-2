const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'components'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
                presets: ['es2015', 'react']
            }
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};