var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: __dirname + '/app/main.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

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
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
  	contentBase: __dirname + '/build',
  	inline: true,
  	colors: true,
  	historyApiFallback: true,
  	hot: true
  }
};

module.exports = config;