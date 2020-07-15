// require mongoose module to create database
const mongoose = require('mongoose');

// Establish connection with db
mongoose.connect('mongodb://localhost/todos_app_db');


// storing the database connection
const dB = mongoose.connection;


// defining error and successful establishment conditions
dB.on('error', console.error.bind(console, 'Error connecting to database'));
dB.once('open', function(){
    console.log('Database is up and running');
});



// Exporting the db to be used in app.js
module.exports = dB;