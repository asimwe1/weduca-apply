const Country = require('../models/Country.model');
const Student = require('../models/Student.model');
const Institution = require('../models/Institution.model');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalSchools = await Institution.countDocuments();
    const totalStudents = await Student.countDocuments();
    const totalApplications = 8765; // Placeholder; add Application model later
    const successRate = "75%"; // Placeholder; calculate from real data later
    res.json({ totalSchools, totalStudents, totalApplications, successRate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};