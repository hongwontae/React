const PlayResultController = require('../controller/PlayResultController')

const express = require('express');

const router = express.Router();

router.get('/prall',PlayResultController.getAllResult);
router.get('/prone/:id', PlayResultController.getOneResult);
router.post('/prone', PlayResultController.postPlayResult);

module.exports = router;