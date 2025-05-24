const express = require('express');
const { 
  login, 
  logout, 
  forgotPassword, 
  resetPassword, 
  getSettings, 
  updateSettings 
} = require('../controllers/auth.controller');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

// Protected routes
router.get('/settings', authenticateToken, getSettings);
router.put('/settings', authenticateToken, updateSettings);

module.exports = router;