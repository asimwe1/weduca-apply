const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const dotenv = require('dotenv');
const path = require('path');

// Ensure required dependencies for authentication are installed
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

// Import routes
const applicationRoutes = require('./routes/application.routes');
const uploadRoutes = require('./routes/upload.routes');
const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');
const institutionRoutes = require('./routes/institution.routes');

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
<<<<<<< HEAD
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

=======
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
>>>>>>> d6de5d71966745acdd17eae120a7772b9d7d0750
    const allowedOrigins = [
      'http://localhost:8080',
      'http://localhost:3000',
      'http://127.0.0.1:8080',
      'http://127.0.0.1:3000',
      'https://admin.weducaapplyltd.com'
    ];
<<<<<<< HEAD

=======
    
>>>>>>> d6de5d71966745acdd17eae120a7772b9d7d0750
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Request-Method',
    'Access-Control-Request-Headers'
  ],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers for better CORS handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Weduca Admin API Documentation",
  swaggerOptions: {
    persistAuthorization: true
  }
}));

// Connect to MongoDB
<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    // Don't exit the process, let the app continue running
    // The health check will report the connection status
  });

// Add connection event handlers
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB reconnected');
});
=======
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
>>>>>>> d6de5d71966745acdd17eae120a7772b9d7d0750

// Handle multipart/form-data and JSON
app.use((req, res, next) => {
  if (req.is('multipart/form-data')) {
    return next();
  }
  express.json()(req, res, next);
});

// Public route for the homepage
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to WedukaApply' });
});

// Routes
app.use('/api/applications', applicationRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/institutions', institutionRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
  app.use(express.static(path.join(__dirname, 'frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
=======
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
>>>>>>> d6de5d71966745acdd17eae120a7772b9d7d0750
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
<<<<<<< HEAD
    timestamp: Date.now(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
=======
    timestamp: Date.now()
>>>>>>> d6de5d71966745acdd17eae120a7772b9d7d0750
  };
  try {
    res.send(healthcheck);
  } catch (e) {
    healthcheck.message = e;
    res.status(503).send();
  }
});

// Handle 404 errors
app.use((req, res) => {
  console.log(`Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
<<<<<<< HEAD
  res.status(500).json({
=======
  res.status(500).json({ 
>>>>>>> d6de5d71966745acdd17eae120a7772b9d7d0750
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});