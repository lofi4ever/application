const http = require('http');
const express = require('express');

let handler = express();

handler
  .use(express.static(`${__dirname}/frontend/public`))
  .get('/', (req, res) => {
    res.sendFile(`${__dirname}/frontend/index.html`);
  });

http.createServer(handler)
  .listen(3000, () => console.log('run'));