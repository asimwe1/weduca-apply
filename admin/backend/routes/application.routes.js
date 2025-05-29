const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');
const { authenticateToken } = require('../middleware/auth');

// Protected routes (require authentication)
router.use(authenticateToken);

// Get all applications
router.get('/', applicationController.getAllApplications);

// Get recent applications for dashboard
router.get('/recent', applicationController.getRecentApplications);

// Get applications by institution
router.get('/by-institution', applicationController.getApplicationsByInstitution);

// Create new application
router.post('/', applicationController.createApplication);

// Get specific application
router.get('/:id', applicationController.getApplicationById);

// Update application (only for pending status)
router.put('/:id', applicationController.updateApplication);

// Update application status
router.patch('/:id/status', applicationController.updateApplicationStatus);

module.exports = router;