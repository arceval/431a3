var zmq = require('zeromq');
var sock = zmq.socket('pub');

// Binds the publisher to port 3000
sock.bindSync('tcp://*:3000');
console.log('Publisher bound on port 3000');

// Sends the timestamp out to subscribers ever half-second
setInterval (function() {
    var timestamp = new Date();
    sock.send(['time', timestamp.getTime()]);
    console.log('timestamp sent to subscribers', timestamp);
}, 500);
