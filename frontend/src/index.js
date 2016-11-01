var express = require('express');
var app = express();
var request = require('superagent');

if(!process.env.PORT) {
	console.log("PORT env not defined")
	process.exit(1)
}

if(!process.env.BACKEND_URL) {
	console.log("BACKEND_URL env not defined")
	process.exit(2)
}

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
