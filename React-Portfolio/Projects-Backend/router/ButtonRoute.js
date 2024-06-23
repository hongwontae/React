const express = require('express');

const buttonController = require('../controller/ButtonController')

const router = express.Router();

router.post('/register', buttonController.postButton);
router.get('/getAll', buttonController.getButton)


module.exports = router