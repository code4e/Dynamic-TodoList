// Require essential modules

const port = 8000;
const express = require('express');
const db = require('./config/mongoose');
const app = express();
const path = require('path');


// Some middlewares to handle form data parsing and render other static files
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/', require('./routes'));


// setting up view engine and setting views property of ejs to views directory of the project
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Activating server at port 8000
app.listen(port, function(err){
    if(err){
        console.log(`Error at port: ${port}`);
    }
    else{
        console.log(`Server is up at port: ${port}`);
    }
});