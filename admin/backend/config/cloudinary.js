const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'weduca-documents',
    allowed_formats: ['pdf', 'doc', 'docx', 'zip', 'jpg', 'jpeg', 'png'],
    resource_type: 'auto'
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 75 * 1024 * 1024 // 75MB limit
  }
});

module.exports = {
  cloudinary,
  upload
}; 