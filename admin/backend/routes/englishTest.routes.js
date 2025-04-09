const express = require('express');
const router = express.Router();
const englishTestController = require('../controllers/englishTest.controller');

router.get('/', englishTestController.getTests);
router.post('/', englishTestController.createTest);

module.exports = router;