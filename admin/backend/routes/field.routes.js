const express = require('express');
const router = express.Router();
const fieldController = require('../controllers/field.controller');

router.get('/', fieldController.getFields);
router.post('/', fieldController.createField);

module.exports = router;