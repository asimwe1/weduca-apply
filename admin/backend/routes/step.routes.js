const express = require('express');
const router = express.Router();
const stepController = require('../controllers/step.controller');

router.get('/', stepController.getSteps);
router.post('/', stepController.createStep);

module.exports = router;