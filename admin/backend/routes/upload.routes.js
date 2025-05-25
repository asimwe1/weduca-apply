const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const { authenticateToken } = require('../middleware/auth');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Define allowed file types and their mime types
const ALLOWED_FILES = {
  'pdf': 'application/pdf',
  'doc': 'application/msword',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'zip': ['application/zip', 'application/x-zip-compressed'],
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'png': 'image/png'
};

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Get file extension
    const ext = path.extname(file.originalname).toLowerCase().slice(1);
    
    // Validate file type
    if (!ALLOWED_FILES[ext]) {
      throw new Error(`File type ${ext} is not allowed`);
    }

    return {
      folder: 'weduca-documents',
      resource_type: 'auto',
      allowed_formats: Object.keys(ALLOWED_FILES),
      format: ext, // Preserve original extension
      public_id: `${path.parse(file.originalname).name}_${Date.now()}`, // Unique filename
      transformation: [{ flags: "attachment" }]
    };
  }
});

// Configure multer with Cloudinary storage
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 75 * 1024 * 1024, // 75MB limit
    files: 3 // Maximum 3 files
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase().slice(1);
    const mimeType = file.mimetype.toLowerCase();

    // Check if extension is allowed
    if (!ALLOWED_FILES[ext]) {
      return cb(new Error(`File type ${ext} is not allowed`));
    }

    // Check mime type
    const allowedMimes = Array.isArray(ALLOWED_FILES[ext]) 
      ? ALLOWED_FILES[ext] 
      : [ALLOWED_FILES[ext]];

    if (!allowedMimes.includes(mimeType)) {
      return cb(new Error(`Invalid file type. Mime type ${mimeType} is not allowed`));
    }

    cb(null, true);
  }
});

// Error handling middleware
const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File is too large. Maximum size is 75MB' });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ error: 'Too many files. Maximum is 3 files' });
    }
    return res.status(400).json({ error: err.message });
  }
  
  if (err.message.includes('file format')) {
    return res.status(400).json({ 
      error: 'Invalid file format. Allowed formats are: PDF, DOC, DOCX, ZIP, JPG, and PNG' 
    });
  }
  
  console.error('Upload error:', err);
  res.status(500).json({ error: 'Failed to upload files' });
};

// Apply authentication middleware to all upload routes
router.use(authenticateToken);

// Handle multiple file uploads
router.post('/documents', (req, res, next) => {
  console.log('Received upload request');
  console.log('Files in request:', req.files);
  console.log('Request headers:', req.headers);

  upload.array('documents', 3)(req, res, async (err) => {
    if (err) {
      console.error('Upload middleware error:', err);
      return handleUploadError(err, req, res, next);
    }

  try {
    if (!req.files || req.files.length === 0) {
        console.error('No files in request');
      return res.status(400).json({ error: 'No files uploaded' });
    }

      console.log('Processing files:', req.files.map(f => ({
        originalname: f.originalname,
        mimetype: f.mimetype,
        size: f.size
      })));

      // Process uploaded files
      const uploadedFiles = await Promise.all(req.files.map(async (file) => {
        try {
          const ext = path.extname(file.originalname).toLowerCase().slice(1);
          console.log('Processing file:', {
            originalname: file.originalname,
            ext,
            mimetype: file.mimetype
          });

          // Get the public ID from the Cloudinary response
          const publicId = file.path.split('/').pop().split('.')[0];
          
          // Determine resource type based on file extension
          const resourceType = ext.match(/^(jpg|jpeg|png|gif)$/i) ? 'image' : 'raw';
          
          // Generate secure download URL with proper resource type and format
          const url = cloudinary.url(publicId, {
            resource_type: resourceType,
            type: 'upload',
            flags: 'attachment',
            format: ext,
            version: file.version || Date.now()
          });

          console.log('Generated Cloudinary URL:', url);

          return {
            url,
      originalName: file.originalname,
      size: file.size,
            format: ext,
            filename: path.parse(file.originalname).name,
            contentType: file.mimetype,
            uploadDate: new Date(),
            publicId: publicId,
            resourceType: resourceType
          };
        } catch (fileError) {
          console.error('Error processing file:', {
            file: file.originalname,
            error: fileError.message,
            stack: fileError.stack
          });
          throw new Error(`Failed to process file: ${file.originalname}`);
        }
      }));

      console.log('Successfully processed files:', uploadedFiles.map(f => ({
        url: f.url,
        originalName: f.originalName
      })));

    res.json({ files: uploadedFiles });
  } catch (error) {
      console.error('Upload processing error:', {
        message: error.message,
        stack: error.stack
      });
      res.status(500).json({ 
        error: 'Failed to process uploaded files',
        details: error.message 
      });
  }
  });
});

// Handle single file upload (for photos)
router.post('/photo', upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    res.json({
      url: req.file.path,
      originalName: req.file.originalname,
      size: req.file.size,
      format: req.file.format
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

module.exports = router; 