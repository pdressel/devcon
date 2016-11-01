var express = require('express');
var app = express();
var request = require('superagent');

app.get('/', function (req, res) {
	request.get(process.env.BACKEND_URL).end(function (err, result) {
    if (err) {
			res.send('Failed to reach the backend 😐');
		} else {
			res.send(`Response from the backend: "${result.text}"`);
		}
  });
});

app.listen(process.env.PORT, function () {
  console.log(`Frontend listening on port ${process.env.PORT}!`);
});
