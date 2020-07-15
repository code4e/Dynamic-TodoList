const port = 8000;
const express = require('express');
const db = require('./config/mongoose');
// const Todos = require('./models/todos');
const app = express();
const path = require('path');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/', require('./routes'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(port, function(err){
    if(err){
        console.log(`Error at port: ${port}`);
    }
    else{
        console.log(`Server is up at port: ${port}`);
    }
});