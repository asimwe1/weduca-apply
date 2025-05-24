const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');

// Import all sub-routers
const authRoutes = require('./auth.routes'); // Added for authentication
const countryRoutes = require('./country.routes');
const fieldRoutes = require('./field.routes');
const stepRoutes = require('./step.routes');
const institutionRoutes = require('./institution.routes');
const englishTestRoutes = require('./englishTest.routes');
const studentRoutes = require('./student.routes');
const dashboardRoutes = require('./dashboard.routes');
const settingsRoutes = require('./settings.routes');
const applicationRoutes = require('./application.routes');

// List of all routes with their methods and paths
const getRoutes = () => {
  const routes = [];
  
  // Helper function to extract routes from a router
  const extractRoutes = (router, basePath) => {
    router.stack.forEach((layer) => {
      if (layer.route) {
        const path = `${basePath}${layer.route.path === '/' && basePath ? '' : layer.route.path}`;
        Object.keys(layer.route.methods).forEach((method) => {
          routes.push({ method: method.toUpperCase(), path });
        });
      }
    });
  };

  // Extract routes from each sub-router
  extractRoutes(authRoutes, '/auth'); // Added for auth routes
  extractRoutes(countryRoutes, '/countries');
  extractRoutes(fieldRoutes, '/fields');
  extractRoutes(stepRoutes, '/steps');
  extractRoutes(institutionRoutes, '/institutions');
  extractRoutes(englishTestRoutes, '/english-tests');
  extractRoutes(studentRoutes, '/students');
  extractRoutes(dashboardRoutes, '/dashboard');
  extractRoutes(settingsRoutes, '/settings');
  extractRoutes(applicationRoutes, '/applications');

  return routes;
};

// Root route to list all available routes (public)
router.get('/', (req, res) => {
  const availableRoutes = getRoutes();
  res.json({
    message: 'Available API Routes',
    routes: availableRoutes.sort((a, b) => a.path.localeCompare(b.path)), // Sort alphabetically by path
    total: availableRoutes.length,
  });
});

// Mount sub-routers
router.use('/auth', authRoutes); // Public route for authentication
router.use('/countries', authenticateToken, countryRoutes);
router.use('/fields', authenticateToken, fieldRoutes);
router.use('/steps', authenticateToken, stepRoutes);
router.use('/institutions', authenticateToken, institutionRoutes);
router.use('/english-tests', authenticateToken, englishTestRoutes);
router.use('/students', authenticateToken, studentRoutes);
router.use('/dashboard', authenticateToken, dashboardRoutes);
router.use('/settings', authenticateToken, settingsRoutes);
router.use('/applications', authenticateToken, applicationRoutes);

module.exports = router;