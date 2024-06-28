const express = require('express');

const FormationController = require('../controller/FormationController')

const router = express.Router();

router.post('/formationPost', FormationController.postFormation);
router.get('/formationGet', FormationController.getFormation )
router.delete('/dele', FormationController.deleteFormation)


module.exports = router