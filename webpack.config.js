const path = require("path");
const webpack = require("webpack");

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextPluginConfig = new ExtractTextPlugin(
    "index_bundle.css"
);

module.exports = {
  context: __dirname,
  entry: "./client/take_note.jsx",
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  plugins: [
    ExtractTextPluginConfig
  ]
};
