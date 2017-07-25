var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var dbCon = require('./database_connection');

function authorize(req, res, next) {
    if (true) {
        next()
    } else {
        res.status(403).send('Forbidden')
    }
}

app.route('/')

    .get(authorize,function(req, res) {
        res.send('this is the forget password form get');
    })

    .post(authorize,function(req, res, next) {
        console.log('username ...', req.body)
        var count = dbCon.con.query("SELECT user_password FROM user WHERE user_name = '"+req.body.username + "';", function (err, result) {
            if (err) throw err;
            console.log("result",result[0].user_password);
            if(result[0]){
                res.send(JSON.stringify({status : true , data : result[0].user_password }));
            }
            else{
                console.log("not insert")
                res.send(JSON.stringify({status : false , data : 'Data Not Insert'}));
            }
        });
    });

module.exports = app