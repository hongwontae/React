const PlayResultController = require('../controller/PlayResultController')
const isAuth = require('../util/isAuth')

const express = require('express');

const router = express.Router();

router.get('/prall',PlayResultController.getAllResult);
router.get('/prone/:id', PlayResultController.getOneResult);
router.post('/prone', PlayResultController.postPlayResult);
router.post('/md/:id', isAuth, PlayResultController.getOneModiData);

router.post('/ud/:id', PlayResultController.updateResult);

module.exports = router;    