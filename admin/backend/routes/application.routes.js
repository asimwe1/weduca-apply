const express = require('express');
const router = express.Router();
const { getRecentApplications, createApplication, getApplicationsByInstitution, getAllApplications } = require('../controllers/application.controller');


router.get('/', getRecentApplications);
router.post('/', createApplication);
router.get('/by-institution', getApplicationsByInstitution);
router.get('/all', getAllApplications); // New route

module.exports = router;