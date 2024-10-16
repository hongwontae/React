const express = require('express');
const PlayRatingController = require('../controller/PlayRatingController');
const router = express.Router();

router.get('/prat', PlayRatingController.getAllRating);
router.post('/register', PlayRatingController.postOneRating);

router.get('/playerAll', PlayRatingController.playerAllGet);
router.post('/post', PlayRatingController.playerPost);

router.get('/prat/one', PlayRatingController.getOneRating);

module.exports = router;


