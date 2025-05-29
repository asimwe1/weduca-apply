const express = require('express');
const { submitForm } = require('../controllers/form.controllers');
const router = express.Router();

router.post('/submit-form', submitForm);

module.exports = router;

