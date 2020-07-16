// Require the database model to manipulate database 
const Model = require("../models/todos");

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
    // for deleted tasks, setting their completed field to true in the respective document
    if (req.body.todosID == undefined) {
        return res.redirect('back');
    }

    var items = [];
    for (var key in req.body) {
        items = req.body[key];
    }

    let str = req.body.todosID;
    console.log(str);
    if(str.length == 24){
        items = [];
        items.push(str);
    }

    Model.Todos.bulkWrite(items.map((data) => ({
        updateOne: {
            filter: {
                _id: data
            },
            update: {
                $set: {
                    completed: true
                }
            }
        }
    })));
    return res.redirect('back');
}