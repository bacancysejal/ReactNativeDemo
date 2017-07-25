var express = require('express');
var app = express();

app.use('/login', require('./login') );
app.use('/signup', require('./signup'));
app.use('/forgetpassword', require('./forgetpassword'));
app.use('/upload', require('./imageUpload'));
app.use('/image', require('./images'));

module.exports = app;