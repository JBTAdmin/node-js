const mongoose = require('mongoose');

// define connection URI string
const DBURI = 'mongodb://localhost/nodejsexample';

// open mongoose connection
mongoose.connect(DBURI);

// Listen to CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Mongoose Default Connection with : ' + DBURI);
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});

// When connection is disconnected
mongoose.connection.on('disconnected', () => {
	console.log('Mongoose Default Disconnected');
});
