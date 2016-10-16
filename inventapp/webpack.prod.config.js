const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: __dirname + '/src/index.js',

  output: {
    path: __dirname + '/build',
    // add hash to the end of file (to remove caching issues)
    filename: 'bundle-[hash].js'
  },

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
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss!sass?sourceMap')
      }, {
        test: /\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },

  postcss: [autoprefixer],

  plugins: [
    // add description to generated files (For example license info)
    new webpack.BannerPlugin("ISC license. Author - Vitaliy Ladan"),
    // if an error occures during building then don't create/write files
    // to the output directory
    new webpack.NoErrorsPlugin(),
    // Webpack gives IDs to identify your modules.
    // With this plugin, Webpack will analyze and prioritize often
    // used modules assigning them the smallest ids.
    new webpack.optimize.OccurenceOrderPlugin(),
    // UglifyJS is a JavaScript compressor/minifier.
    new webpack.optimize.UglifyJsPlugin(),
    // add hash to the end of file (to remove caching issues)
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    new ExtractTextPlugin('style-[hash].css', {
      allChunks: false
    })
  ]

};
module.exports = config;
