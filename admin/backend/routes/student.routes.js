const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getStudents, createStudent } = require('../controllers/student.controller'); // Adjust path


// Routes (root-level since /students is prefixed in index.js)
router.get('/', getStudents);
router.post('/', createStudent);

module.exports = router;







