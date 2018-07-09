const express = require('express');
const app = express();
const path = require('path');
const dataMock = require('./mock.js');

const PUBLIC_LOOKUP = '../public';
const PUBLIC_PATH = path.resolve(__dirname, PUBLIC_LOOKUP);

let isBusy = false;

app.use(express.static(PUBLIC_PATH));

app.put('/api/busy', function (request, response) {
  isBusy = !isBusy;
  response.sendStatus(200);
});

app.get('/api/cats', function (request, response) {
  if (isBusy) {
    response.sendStatus(500);
    return;
  }
  response.send(dataMock.getRandomData(10));
});

app.get('*', function (request, response) {
  response.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(3000, function () {
  console.log('SW example server on port 3000!');
});