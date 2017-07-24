var path = require('path')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var webpackConfig = merge(baseWebpackConfig, {
  devtool: false,
  output: {
    publicPath: config.prodPublicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.htmlTpl
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
    })
  ]
})



module.exports = webpackConfig
