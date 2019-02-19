var zmq = require('zeromq');
var sock = zmq.socket('sub');

sock.connect('tcp://10.138.0.2:3000');
sock.subscribe('time');
console.log('Subscriber connected to port 3000');

sock.on('message', function(topic, message) { 
    var date = new Date(parseInt(message.toString()));
    console.log('Publisher time:',date);
});
