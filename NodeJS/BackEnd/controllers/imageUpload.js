const express = require('express');
var fs = require('fs');
const app = express();
var multer = require('multer');
var upload = multer();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var dbcon = require('./database_connection');
app.use(upload.array());
app.use(express.static('public'));

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

app.post('/',authorize, function(req, res) {
    var bearerHeader = req.headers["authorization"];
    var base64Data = req.body.avatar.replace(/^data:image\/png;base64,/, "");
    var currentTime = new Date().getTime()

    dbcon.con.query("SELECT user_profile from user WHERE user_token='"+bearerHeader+"';" , function (err, result) {
        if (err) throw err;
        console.log("result data", result[0].user_profile)
        if(result[0].user_profile){
            fs.unlink("./controllers/images/"+(result[0].user_profile), function(error) {
                if (error) {
                    throw error;
                }
                console.log('Deleted dog.jpg!!');
            });
        }
        fs.writeFile("./controllers/images/"+currentTime+".jpg" , base64Data, 'base64', function(err) {
            console.log(err);
        });
    })

    dbcon.con.query("UPDATE user SET user_profile = '"+currentTime+".jpg' WHERE user_token='"+bearerHeader+"';", function(err, result){
        if (err) throw err ;
    })

    dbcon.con.query("SELECT * from user WHERE user_token='"+bearerHeader+"';" , function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify({status: true, data: result[0]}));
    })
});

app.post('/updateUserData',authorize, function(req, res) {
    var bearerHeader = req.headers["authorization"];
    console.log("request",bearerHeader)
    dbcon.con.query("UPDATE user SET user_name = '"+req.body.username+"', user_email = '"+req.body.useremail+"' , user_password = '"+req.body.password+"' WHERE user_token='"+bearerHeader+"';", function(err, result){
        if (err) throw err ;
    })
    dbcon.con.query("SELECT * from user WHERE user_token='"+bearerHeader+"';" , function (err, result) {
        if (err) throw err;
        console.warn("bvjb", result[0])
        res.send(JSON.stringify({status: true, data: result[0]}));
    })
})

module.exports = app