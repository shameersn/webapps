const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'css/main.css'
});

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'js/bundle.js',
   },
  module: {
    rules:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.html$/,
        loader:['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use:{
          loader: 'file-loader',
          options:{
            name: '[name].[ext]',
            outputPath: 'img/',
          }
        }
      }
    ]
  },
  plugins:[
    extractPlugin,
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new cleanWebpackPlugin(['dist'])
  ]
}