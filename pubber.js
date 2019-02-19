var zmq = require('zeromq');
var sock = zmq.socket('pub');

sock.bindSync('tcp://*:3000');
console.log('Publisher bound on port 3000');

setInterval (function() {
    console.log('Sending time to subscribe port');
    var timestamp = new Date();
    sock.send(['time', timestamp.getTime()]);
}, 500);
