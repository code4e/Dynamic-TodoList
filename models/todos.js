
// Requiring mongoose module
const mongoose = require('mongoose');

// Creating todo list schema
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        default: 'No Deadline'
    },
    completed: {
        type: Boolean,
        default: false
    }
});


// creating done tasks list schema
const doneTodoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        default: 'No Deadline'
    },
});



// assigning the Todos collection with the todoSchema
const Todos = mongoose.model('Todos', todoSchema);


// assigning the DoneTodos collection with the doneTodosSchema
const DonetoDos = mongoose.model('DonetoDos', doneTodoSchema);

// putting the two collections into an object 
const Model = {Todos, DonetoDos};


// exporting the model
module.exports = Model;