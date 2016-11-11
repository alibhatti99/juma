var app = require('./server/server.js');
var mongoose = require('mongoose');

// set mongoURI (env variable name may be different for Heroku/AWS)
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/juma';

// connect to the db
mongoose.connect(mongoURI);

// set port
var port = process.env.PORT || 8080;

// listen on port
app.listen(port);

console.log('Server is listening on port ' + port);