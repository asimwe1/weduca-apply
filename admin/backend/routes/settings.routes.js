const express = require('express');
const { getSettings, updateSettings } = require('../controllers/settings.controller');

const router = express.Router();

router.get('/', getSettings);
router.post('/', updateSettings);

module.exports = router;