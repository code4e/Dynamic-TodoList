const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Could not establish connection with database'));
db.once('open', function(){
    console.log('Database connection successfully established');
});