


const Todos = require("../models/todos");
module.exports.todoForm = function(req, res){
    console.log(req.body);
    Todos.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function(err, newTodo){
        if(err){
            console.log('Could not push into database');
            return;
        }
        console.log(newTodo);
        return res.render('back');
    });
}