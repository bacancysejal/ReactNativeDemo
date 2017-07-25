var mysql = require('mysql');

// Database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mysqlFirstDemo"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
exports.con = con;