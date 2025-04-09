const express = require('express');
const router = express.Router();
const institutionController = require('../controllers/institution.controller');

router.get('/', institutionController.getInstitutions);
router.post('/', institutionController.createInstitution);

module.exports = router;