const path = require('path');

module.exports = {
   entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client')
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      }
    ]
  }
}