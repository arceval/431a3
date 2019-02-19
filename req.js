var zmq = require('zeromq');
var requester = zmq.socket('req');

// Connect to the server on port 3000
requester.connect('tcp://10.138.0.2:3000');

// When the requester gets a reply, runs the timestamp algorithm
requester.on('message', function(msg) {
    // When we get the response, take an after timestamp
    var after = new Date();
    var d = new Date(parseInt(msg.toString()) + ((after - before) / 2));
    console.log('got reply', d);
});

// Take a before timestamp
var before = new Date();
// Send a request for the time to the server
requester.send("Time");
