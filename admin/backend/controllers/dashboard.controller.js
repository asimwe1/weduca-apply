const Country = require('../models/Country.model');
const Student = require('../models/Student.model');
const Institution = require('../models/Institution.model');
const Application = require('../models/Application.model');

exports.getDashboardStats = async (req, res) => {
  try {
    const [totalSchools, totalStudents, totalApplications, approvedApplications] = await Promise.all([
      Institution.countDocuments(),
      Student.countDocuments(),
      Application.countDocuments(),
      Application.countDocuments({ status: 'approved' })
    ]);

    // Calculate success rate
    const successRate = totalApplications > 0 
      ? ((approvedApplications / totalApplications) * 100).toFixed(1) + '%'
      : '0%';

    // Calculate changes (mock data for now - you can implement real calculations later)
    const changes = {
      schools: { value: '12%', positive: true },
      students: { value: '8%', positive: true },
      applications: { value: '5%', positive: true },
      successRate: { value: '2%', positive: true }
    };

    res.json({ 
      totalSchools, 
      totalStudents, 
      totalApplications, 
      successRate,
      changes 
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ message: error.message });
  }
};