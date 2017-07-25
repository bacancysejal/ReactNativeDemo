var express = require('express')
var app = express();
var path = require('path');
app.use('/', require('./controllers'));
app.use('/images',express.static(path.join(__dirname, './controllers/images')))
app.listen(8080, function() {
    console.log('Listening on port 8080...')
})