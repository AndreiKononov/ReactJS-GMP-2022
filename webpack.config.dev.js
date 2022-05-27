const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common,{
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
