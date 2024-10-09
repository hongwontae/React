const express = require('express');

const DeleteController = require('../controller/DeleteController');
const isAuth = require('../util/isAuth');

const router = express.Router();

router.post('/remove', isAuth, DeleteController.deleteOne);


module.exports = router;