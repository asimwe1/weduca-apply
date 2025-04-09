const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connectDB } = require('./config/db'); // Adjust path
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use((req, res, next) => {
  if (req.is('multipart/form-data')) {
    return next();
  }
  express.json()(req, res, next);
});

// Mount all routes under /api
const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);

// Catch-all 404 handler
app.use((req, res) => {
  console.log(`Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

