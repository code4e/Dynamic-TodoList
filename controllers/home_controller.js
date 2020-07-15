const Todos = require('../models/todos');
module.exports.home = function(req, res){
    Todos.find({}, function(err, todos){
        if(err){
            console.log('Could not fetch from database');
            return res.redirect('back');
        }
        return res.render('home', {
            title: 'My ToDo App',
            todos_list: todos
        });
    });
    
}

