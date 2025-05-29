const express = require('express');
const { getDashboardStats } = require('../controllers/dashboard.controller');

const router = express.Router();

router.get('/', getDashboardStats);

module.exports = router;