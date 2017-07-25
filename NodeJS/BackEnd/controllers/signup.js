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
        res.send('this is the signup form get');
    })

    .post(authorize,function(req, res, next) {
        console.log("req",req.body);
        var count = dbCon.con.query("SELECT count(*) as count FROM user WHERE user_name = '"+req.body.username + "' || user_email = '"+req.body.email +"';", function (err, result) {
            if (err) throw err;
            if(result[0].count == 0){
                dbCon.con.query("INSERT INTO user ( user_id, user_name, user_email, user_password) VALUES(NULL, '"+ req.body.username +"','"+req.body.email +"','"+req.body.password +"');", function(err,result){
                    if (err) throw err;
                    res.send(JSON.stringify({status : true , data : 'Data insert' }));
                })
            }
            else{
                console.log("not insert")
                res.send(JSON.stringify({status : false , data : 'Data Not Insert'}));
            }
        });
});

module.exports = app