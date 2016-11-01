var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

if(!process.env.PORT) {
	console.log("PORT env not defined")
	process.exit(1)
}

if(!process.env.MONGODB_URL) {
	console.log("MONGODB_URL env not defined")
	process.exit(2)
}

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
