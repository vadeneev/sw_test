const express = require('express');
const app = express();
const path = require('path');

const PUBLIC_LOOKUP = '../public';
const PUBLIC_PATH = path.resolve(__dirname, PUBLIC_LOOKUP);

app.use(express.static(PUBLIC_PATH)) ;

app.get('*', function (request, response) {
  response.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(3000, function () {
  console.log('SW example server on port 3000!');
});