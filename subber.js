var zmq = require('zeromq');
var sock = zmq.socket('sub');

// Connect to the publishers's port
sock.connect('tcp://10.138.0.2:3000');
// With the subscription "time"
sock.subscribe('time');
console.log('Subscriber connected to port 3000');

// When a message is sent from the publisher, it is received and the date is collected
sock.on('message', function(topic, message) { 
    var date = new Date(parseInt(message.toString()));
    console.log('Publisher time:',date);
});
