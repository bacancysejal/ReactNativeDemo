var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));
websocket.on('connection', function (socket){
    clients[socket.id] = socket;
    socket.on('userJoined', function (msg){
        console.log("get msg", msg)
    });
});



module.exports = app;