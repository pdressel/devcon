var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello from the backend!');
});

app.listen(3000, function () {
  console.log('Backend listening on port 3000!');
});
