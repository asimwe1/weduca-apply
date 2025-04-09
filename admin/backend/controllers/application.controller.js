const Application = require('../models/Application.model');

exports.getRecentApplications = async (req, res) => {
  try {
    const applications = await Application.find()
    .populate('student', 'firstName lastName email avatar')
    .populate('institution', 'name')
    .sort({ date: -1 }) // Sort by most recent
    .limit(5); // Limit to 5 recent applications
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// New endpoint to get application counts by institution
exports.getApplicationsByInstitution = async (req, res) => {
  try {
    const applicationsByInstitution = await Application.aggregate([
      {
        $group: {
          _id: '$institution',
          applicationCount: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: 'institutions',
          localField: '_id',
          foreignField: '_id',
          as: 'institution',
        },
      },
      {
        $unwind: '$institution',
      },
      {
        $project: {
          _id: 0,
          institutionId: '$institution._id',
          institutionName: '$institution.name',
          applicationCount: 1,
        },
      },
      {
        $sort: { applicationCount: -1 },
      },
    ]);

    res.json(applicationsByInstitution);
  } catch (error) {
    console.error('Error fetching applications by institution:', error);
    res.status(500).json({ message: 'Failed to fetch applications by institution' });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('student', 'firstName lastName email avatar')
      .populate('institution', 'name');
    res.json(applications);
  } catch (error) {
    console.error('Error fetching all applications:', error);
    res.status(500).json({ message: 'Failed to fetch all applications' });
  }
};










// New endpoint to fetch all applications