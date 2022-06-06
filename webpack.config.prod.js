const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('cssnano'),
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
});
