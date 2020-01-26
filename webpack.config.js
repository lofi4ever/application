const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    test: './frontend/src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/main.css'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './frontend/public/js')
  }
}