const { webpackConfig } = require('@rails/webpacker');
const { merge } = require('webpack-merge');
const DotenvPlugin = require('dotenv-webpack');
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const customConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.css', '.tsx', '.ts', '.js']
  },
  plugins: [
    new ForkTSCheckerWebpackPlugin(),
    new DotenvPlugin(),

  ],
}

module.exports = merge(webpackConfig, customConfig)
