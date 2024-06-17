const express = require('express');

const FormationController = require('../controller/FormationController')

const router = express.Router();

router.post('/formationPost', FormationController.postFormation);
router.get('/formationGet', FormationController.getFormation )


module.exports = router