var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: __dirname + '/app/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
      	test: /\.json$/,
      	loader: 'json'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    // add description to generated files (For example license info)
    new webpack.BannerPlugin("ISC license. Author - Vitaliy Ladan"),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    // Webpack gives IDs to identify your modules. 
    // With this plugin, Webpack will analyze and prioritize often 
    // used modules assigning them the smallest ids.
    new webpack.optimize.OccurenceOrderPlugin(),
    // UglifyJS is a JavaScript compressor/minifier.
    new webpack.optimize.UglifyJsPlugin()
    // add hash to the end of file (to remove caching issues)
    // new ExtractTextPlugin("[name]-[hash].css")
  ]

};
module.exports = config;