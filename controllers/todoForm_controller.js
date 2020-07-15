
// Require the database model to manipulate database 
const Model = require("../models/todos");


// Method to be used to remove Todo from Database
var removeTodo = function (req, res) {
    var items = [];
    for (var key in req.body) {
        items = req.body[key];
    }
    Model.Todos.remove({
        _id: {
            $in: items
        }
    }, function (err, data) {
        if (err) throw err;
        return res.redirect('back');

    });
}

// Action for creating a new Todo and putting it into database
module.exports.createTodo = function (req, res) {
    let date = req.body.dueDate;
    Model.Todos.create({
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
// Method to Delete the todo and it to the doneTasks database Schema

module.exports.deleteTodo = function (req, res) {
    if (req.body.todosID == undefined) {
        return res.redirect('back');
    }
    for (let key in req.body) {
        let id = req.body[key];
        Model.Todos.findById(id, function (err, item) {
            Model.DonetoDos.create({
                description: item.description,
                category: item.category,
                dueDate: item.dueDate,
            }, function (err, doneItem) {
                if (err) {
                    console.log('Error occured');
                } else {
                    console.log('******', doneItem);
                }
            });
        });

    }
    removeTodo(req, res);

}