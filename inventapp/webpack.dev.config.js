const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: __dirname + '/src/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  module: {
    loaders: [{
      	test: /\.json$/,
      	loader: 'json'
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }, {
        test: /\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },

  postcss: [autoprefixer],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: false
    })
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
