const path = require('path');

module.exports = {
  entry: {
    test: './frontend/src/js/index.js'
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
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './frontend/public/js')
  }
}