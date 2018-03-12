const path = require("path");
const webpack = require("webpack");

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
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
