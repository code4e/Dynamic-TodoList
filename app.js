const port = 8000;
const express = require('express');
const db = require('./config/mongoose');
const Todos = require('./models/todos');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error at port: ${port}`);
    }
    else{
        console.log(`Server is up at port: ${port}`);
    }
});