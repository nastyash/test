var express = require('express'),
    server = express(),
    path = require('path');

server.use(express.static(__dirname+'/static'));
server.listen(1337);
