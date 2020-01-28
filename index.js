require('dotenv').config();
const http = require('http');
const express = require('express');

const handler = express();

if(process.env.IS_DEV) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);
  handler.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
  handler.use(require("webpack-hot-middleware")(compiler));
} else {
  handler.use(express.static(`${__dirname}/frontend/public`));
}

handler
  .get('/', (req, res) => {
    res.sendFile(`${__dirname}/frontend/index.html`);
  });

http.createServer(handler)
  .listen(3000, () => console.log('run'));