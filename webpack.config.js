const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

require('dotenv').config();
const isDev = process.env.IS_DEV || false;
const isProd = !isDev;

let styleLoaders = [
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },
  'sass-loader'
];

if(isDev) {
  styleLoaders.unshift('style-loader'); //for HMR to work
} else {
  styleLoaders.unshift(MiniCssExtractPlugin.loader); //extract css for production
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  // entry: [
  //   'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  //   './frontend/index.js'
  // ],
  devtool: 'inline-source-map',
  devServer: { //do not use with webpack-dev-middleware
    contentBase: './frontend',
    proxy: {
      '/!(*.js|*.css)': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
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
        use: styleLoaders
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    //new webpack.HotModuleReplacementPlugin() //use with webpack-hot-middleware but not with dev-server
  ],
  output: {
    filename: 'js/script.bundle.js',
    path: path.resolve(__dirname, './frontend/public/'), 
    publicPath: '/'
  }
}