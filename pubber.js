var zmq = require('zeromq');
var sock = zmq.socket('pub');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound on port 3000');

setInterval (function() {
    console.log('sending a multipart envelope');
    sock.send(['kitty cats', 'meow']);
}, 500);