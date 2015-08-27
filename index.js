var express = require('express');
var bodyParser = require('body-parser');
var mailer = require('nodemailer');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create reusable transporter object using SMTP transport
var transporter = mailer.createTransport({
    port: 465,
    secure: true,
    auth: {
        user: process.env.DEEPROOTS_EMAIL_USER,
        pass: process.env.DEEPROOTS_EMAIL_PASSWORD
    },
    host: 'smtp.webfaction.com'
});

function mailContact(name, email, phone, serviceType, message) {
  transporter.sendMail({
    from: 'billy.arrington@deeprootscarolinas.com',
    to: 'billy.arrington@deeprootscarolinas.com',
    subject: 'New Website Inquiry',
    text: ['Service Inquiry from ',
            name,
            ' at email address: ',
            email,
            ' and phone number: ',
            phone,
            ' looking for help with ',
            serviceType,
            '. They have additionally included the following message: ',
            message].join("")
  });
}


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/gallery', function (req, res) {
  res.render('gallery');
});

app.get('/about', function (req, res) {
  res.render('about');
})

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/testimonials', function (req, res) {
  res.render('testimonials');
});

app.post('/contact', function (req, res) {
  if (req.body.ContactType === 'Testimonial') {
    // do stuff.
  } else {
    mailContact(req.body.Name, req.body.Email, req.body.PhoneNumber, req.body.RequestType, req.body.Message);
  }
  
  res.render('contact');
});

app.use(express.static('public'));

var server = app.listen(12245, function () {
});
