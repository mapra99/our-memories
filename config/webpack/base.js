const { webpackConfig } = require('@rails/webpacker')
const { merge } = require('webpack-merge')

const customConfig = {
  resolve: {
    extensions: ['.css', '.tsx']
  }
}

module.exports = merge(webpackConfig, customConfig)
