const Model = require('../models/todos');
console.log(Model);
module.exports.home = function(req, res){
    Model.Todos.find({}, function(err, todos){
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

