const express = require('express');

const FormationController = require('../controller/FormationController')

const router = express.Router();

router.get('/formationGet', FormationController.getFormation )
router.post('/formationPost', FormationController.postFormation);
router.get('/buttonDataGet', FormationController.getButton)


module.exports = router