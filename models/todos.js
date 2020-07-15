const mongoose = require('mongoose');
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
    }
});

const Todos = mongoose.model('Todos', todoSchema);
module.exports = Todos;