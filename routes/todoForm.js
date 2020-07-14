const express = require('express');
const router = express.Router();
const todoFormController = require('../controllers/todoForm_controller');
router.post('/', todoFormController.todoForm);

module.exports = router;