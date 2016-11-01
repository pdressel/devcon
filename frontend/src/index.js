var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello from the frontend!');
});

app.listen(3000, function () {
  console.log('Frontend listening on port 3000!');
});
