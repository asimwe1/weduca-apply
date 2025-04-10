const express = require('express');
const { login, logout, forgotPassword, resetPassword, getSettings, updateSettings } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/settings', authMiddleware, getSettings);
router.put('/settings', authMiddleware, updateSettings);

module.exports = router;