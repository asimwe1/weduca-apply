const cloudinary = require('cloudinary').v2;
const Student = require('../models/Student.model'); // Adjust path
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Simulated email sending function
const sendWelcomeEmail = (email, firstName, lastName) => {
  console.log(`[EMAIL SIMULATION] Sending welcome email to ${email}`);
  console.log(`Subject: Welcome to Our Platform, ${firstName} ${lastName}!`);
  console.log(`Body: Dear ${firstName}, your account has been created. Login credentials: [Generated]`);
};

// GET /api/students
const getStudents = async (req, res) => {
  console.log('Received GET /api/students'); // Debug log
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ message: 'Failed to fetch students', error: error.message });
  }
};

// GET /api/students/:id
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ message: 'Failed to fetch student', error: error.message });
  }
};

// POST /api/students
const createStudent = async (req, res) => {
  console.log('Received POST /api/students:', req.body, req.file); // Debug log
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      nationality,
      gender,
      status,
      education,
      notes,
      joinDate,
      sendEmail,
    } = req.body;

    let photoUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'students',
        allowed_formats: ['jpg', 'png'],
      });
      photoUrl = result.secure_url;
      fs.unlinkSync(req.file.path); // Clean up temporary file
    }

    const studentData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
      nationality: req.body.nationality,
      gender: req.body.gender,
      status: req.body.status,
      education: typeof req.body.education === 'string' ? JSON.parse(req.body.education) : req.body.education,
      notes: req.body.notes,
      joinDate: joinDate ? new Date(joinDate) : new Date(),
      sendEmail: req.body.sendEmail === 'true',
      photo: req.body.photo || undefined,
     
    };

    const student = new Student(studentData);
    await student.save();

    if (sendEmail === 'true') {
      await sendWelcomeEmail(email, firstName, lastName);
    }

    res.status(201).json({ message: 'Student added', student: studentData });
  } catch (error) {
    console.error('Error adding student:', {
      message: error.message,
      stack: error.stack,
      body: req.body,
    });
    res.status(500).json({ message: 'Failed to add student', error: error.message });
  }
};

module.exports = { getStudents, createStudent, getStudentById };



