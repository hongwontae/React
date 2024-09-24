const PlayResultController = require('../controller/PlayResultController')

const express = require('express');

const router = express.Router();

router.get('/prall',PlayResultController.getAllResult);
router.get('/prone/:id', PlayResultController.getOneResult);
router.post('/prone', PlayResultController.postPlayResult);
router.get('/md/:id', PlayResultController.getOneModiData);

router.post('/ud/:id', PlayResultController.updateResult);

module.exports = router;    