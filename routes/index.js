
// Requiring express and creating modular routes with Router method
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');



// Handling the home request and sending it to appropriate controller in the controllers directory
router.get('/', homeController.home);

// middleware to hande /todos requests
router.use('/todos', require('./todoForm'));



//Exporting the router to be used in app.js
module.exports = router;