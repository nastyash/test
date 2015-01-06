var express = require('express'),
    server = express(),
    path = require('path');

server.listen(1337);
server.use(express.static(path.join(__dirname, 'static')));

