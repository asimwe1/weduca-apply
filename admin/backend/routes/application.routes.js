const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');
const auth = require('../middleware/auth');

// Get all applications with pagination and filters
router.get('/', auth.authenticateToken, applicationController.getApplications);

// Get success rate statistics
router.get('/success-rate', auth.authenticateToken, applicationController.getSuccessRate);

// Get application timeline
router.get('/:id/timeline', auth.authenticateToken, applicationController.getApplicationTimeline);

// Get applications by institution
router.get('/by-institution', auth.authenticateToken, applicationController.getApplicationsByInstitution);

// Get all applications
router.get('/all', auth.authenticateToken, applicationController.getAllApplications);

// Get recent applications
router.get('/recent', auth.authenticateToken, applicationController.getRecentApplications);

// Create new application
router.post('/', auth.authenticateToken, applicationController.createApplication);

// Update application status
router.patch('/:id/status', auth.authenticateToken, applicationController.updateApplicationStatus);

module.exports = router;