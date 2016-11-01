var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get('/', function (req, res) {
	MongoClient.connect(process.env.MONGODB_URL, function(err, db) {
	  if(err) {
			res.send('Failed to reach mongodb 😐');
		} else {
			res.send("Connected to mongodb!");
		  db.close();
		}
	});
});

app.listen(process.env.PORT, function () {
  console.log(`Backend listening on port ${process.env.PORT}!`);
});
