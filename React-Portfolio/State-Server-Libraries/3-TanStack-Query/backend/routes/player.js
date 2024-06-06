/* eslint-disable no-undef */
const express = require('express');
const playerController = require('../controller/player')

const router = express.Router();

router.post('/resister', playerController.postPlayer);

router.get('/showData', playerController.getPlayer);


module.exports = router