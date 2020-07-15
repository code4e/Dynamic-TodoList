const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);
router.use('/submit-todo', require('./todoForm'));




module.exports = router;