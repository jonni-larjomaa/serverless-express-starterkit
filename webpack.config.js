const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const config = {

  entry: slsw.lib.entries,
  target: 'node',

  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: "source-map",
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: ["transform-runtime"],
          presets: ['env', 'stage-0']
        },
        include: __dirname,
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
    new MinifyPlugin()
  ]
};

module.exports = config;
