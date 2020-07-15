const Todos = require("../models/todos");
module.exports.todoForm = function(req, res){
    // let date = ''
    // if(req.body.dueDate != ''){
    //     date = req.body.dueDate.split('-').reverse().join('-');
    // }
    let date = req.body.dueDate
    Todos.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: date || "No Deadline"
    }, function (err, newTodo) {
        if (err) {
            console.log('Error putting the contact into database');
            return
        }
        console.log('********', newTodo);
        return res.redirect('back');
    });
}

