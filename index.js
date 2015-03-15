var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/about', function (req, res) {
	res.render('about');
})

app.get('/contact', function (req, res) {
	res.render('contact');
})

app.use(express.static('public'));

var server = app.listen(12245, function () {
	// var host = server.address().address;
	// var port = server.address().port;
});
