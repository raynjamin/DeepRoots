	var express = require('express');
	var app = express();

	app.get('/', function (req, res) {
		res.send('Hello.');
	});

	app.use(express.static('public'));

	var server = app.listen(3000, function () {
		// var host = server.address().address;
		// var port = server.address().port;
	});