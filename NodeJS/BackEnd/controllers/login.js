var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var dbcon = require('./database_connection');
function authorize(req, res, next) {
    if (true) {
        next()
    } else {
        res.status(403).send('Forbidden')
    }
}

app.get('/',authorize, function (req, res) {
    res.send('Welcome to Login');
})

app.post('/', authorize,function (req, res) {

    console.log(req.body);
    dbcon.con.query("SELECT * from user WHERE user_name = '"+req.body.username+"' && user_password = '"+req.body.password+"'" , function (err, result) {
        if (err) throw err ;
        if(result.length > 0){
            require('crypto').randomBytes(20, function(err, buffer) {
                var token = buffer.toString('hex');
                dbcon.con.query("UPDATE user SET user_token ='"+token+"' WHERE user_name='"+ req.body.username+"';", function(err, result){
                    if (err) throw err ;
                })
                dbcon.con.query("SELECT * from user WHERE user_token='"+token+"';" , function (err, result) {
                    if (err) throw err;
                    res.send(JSON.stringify({status: true, data: result[0]}));
                })
            });
        }
        else{
            res.send(JSON.stringify({status : false , data : 'not match'}));
        }
    });
})

module.exports = app