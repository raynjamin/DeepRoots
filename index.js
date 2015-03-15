var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index');
});

app.use(express.static('public'));

var server = app.listen(3000, function () {
	// var host = server.address().address;
	// var port = server.address().port;
});