'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');

// Support .jsx on Node runtime
require('babel-register')({
  extensions: ['.jsx']
});

const ssr = require('../es/ssr');

// basic HTTP server via express:
const app = express();

const BUNDLE_FILE_URL = '/bundle.client.js';
const BUNDLE_FILE_PATH = path.join(__dirname, `../dist${BUNDLE_FILE_URL}`);

// on each request, render and return a component:
app.get('/', (req, res) => {
  const data = {
    name: 'Hans',
    age: 0,
  };
  const html = ssr(data);
  // send it back wrapped up as an HTML5 document:
  res.send(`<!DOCTYPE html>
    <html>
    <head>
      <title>Preact SSR</title>
    </head>
    <body>
      ${html}
      <script>window.__backend_data__ = ${JSON.stringify(data)};</script>
      <script src="${BUNDLE_FILE_URL}"></script>
    </body>
    </html>`);
});


app.get(BUNDLE_FILE_URL, (req, res) => {
  fs.readFile(BUNDLE_FILE_PATH, 'utf-8', (err, ctx) => {
    res.send(ctx);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Preact Server start on ${PORT}`);
});
