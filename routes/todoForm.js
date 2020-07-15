

// Requiring express and creating modular routes with Router method

const express = require('express');
const router = express.Router();

// requiring the todoForm controller to handle todo list
const todoFormController = require('../controllers/todoForm_controller');

// post request sent to form controller to create a new todo 
router.post('/submit-todos', todoFormController.createTodo);



// post request sent to form controller to delete todo
router.post('/delete-todos', todoFormController.deleteTodo);


//Exporting the router to be used in index.js
module.exports = router;