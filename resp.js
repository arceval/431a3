var zmq = require('zeromq');
var responder = zmq.socket('rep');

// Bind the port to the zmq socket
responder.bindSync('tcp://*:3000');
console.log('responder enabled on port 3000')

// When the server receives a request, return the time
responder.on('message', function(msg){
    console.log('received request:', msg.toString());
    var d = new Date();
    // Send back the timestamp from the server
    responder.send(d.getTime());
    console.log('sent time', d);
});
