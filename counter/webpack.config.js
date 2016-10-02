var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: __dirname + '/app',
  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
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
      },
      {
      	test: /\.css$/,
      	loader: 'style!css?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

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