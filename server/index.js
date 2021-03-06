const express = require('express');
const app = express();
const path = require('path');
//const dataMock = require('./mock.js');
const dataMock = require('./localData.js');

const PUBLIC_LOOKUP = '../public';
const PUBLIC_CATS = '../cats';
const PUBLIC_PATH_CATS = path.resolve(__dirname, PUBLIC_CATS);
const PUBLIC_PATH = path.resolve(__dirname, PUBLIC_LOOKUP);

let isBusy = false;

app.use(express.static(PUBLIC_PATH));
app.use('/cats', express.static(PUBLIC_PATH_CATS, {

  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
  
));

app.get('/api/health', function (request, response) {  
  isBusy 
    ? response.sendStatus(503)
    : response.sendStatus(200);
});

app.get('/api/busy', function (request, response) {
  isBusy = !isBusy;
  console.log('server is Busy :' + isBusy);
  response.sendStatus(200);
});

app.get('/api/cats*', function (request, response) {
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
