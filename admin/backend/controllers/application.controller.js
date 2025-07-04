const Application = require('../models/Application.model');
const Student = require('../models/Student.model');
const Institution = require('../models/Institution.model');

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
    const { referenceId, documentUrls = [], student, ...applicationData } = req.body;
    
    // Validate student ID
    if (!student) {
      return res.status(400).json({ message: 'Student ID is required' });
    }

    // Verify student exists
    const studentExists = await Student.findById(student);
    if (!studentExists) {
      return res.status(404).json({ message: 'Student not found' });
    }

    if (referenceId) {
      const referenceApplication = await Application.findById(referenceId);
      if (!referenceApplication) {
        return res.status(404).json({ message: 'Reference application not found' });
      }
      
      applicationData.reference = {
        applicationId: referenceId,
        status: referenceApplication.status,
        date: new Date()
      };
    }

    // Set initial status to pending for new applications
    applicationData.status = 'pending';
    
    // Convert documentUrls to documents array with metadata
    const documents = documentUrls.map(url => ({
      url,
      originalName: url.split('/').pop() || 'document',
      filename: url.split('/').pop()?.split('.')[0] || 'document',
      uploadDate: new Date()
    }));
    
    // Create application with documents
    const application = new Application({
      ...applicationData,
      student,
      documents,
      submissionDate: new Date(),
      lastUpdated: new Date()
    });
    
    await application.save();

    // Populate necessary fields for response
    await application.populate('student', 'firstName lastName email');
    await application.populate('institution', 'name');

    res.status(201).json(application);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({ message: error.message });
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
    const applications = await Application
      .find()
      .populate('student', 'firstName lastName email')
      .populate('institution', 'name')
      .populate('reference.applicationId', '_id program status')
      .sort({ submissionDate: -1 });

    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get all applications with pagination and filters
exports.getApplications = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object based on query parameters
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.institution) filter.institution = req.query.institution;
    if (req.query.priority) filter.priority = req.query.priority;
    
    // Date range filter
    if (req.query.startDate && req.query.endDate) {
      filter.submissionDate = {
        $gte: new Date(req.query.startDate),
        $lte: new Date(req.query.endDate)
      };
    }

    const applications = await Application.find(filter)
      .populate('student', 'name email')
      .populate('institution', 'name country')
      .sort({ submissionDate: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Application.countDocuments(filter);

    res.json({
      applications,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalApplications: total
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Error fetching applications' });
  }
};

// Get success rate statistics
exports.getSuccessRate = async (req, res) => {
  try {
    const timeframe = req.query.timeframe || 'all'; // all, month, year
    const institutionId = req.query.institution;

    let dateFilter = {};
    const now = new Date();

    // Set date filter based on timeframe
    if (timeframe === 'month') {
      dateFilter = {
        submissionDate: {
          $gte: new Date(now.getFullYear(), now.getMonth(), 1),
          $lte: now
        }
      };
    } else if (timeframe === 'year') {
      dateFilter = {
        submissionDate: {
          $gte: new Date(now.getFullYear(), 0, 1),
          $lte: now
        }
      };
    }

    // Add institution filter if provided
    if (institutionId) {
      dateFilter.institution = institutionId;
    }

    // Get application statistics
    const stats = await Application.aggregate([
      { $match: dateFilter },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Calculate total and success rate
    const totals = {
      total: 0,
      approved: 0,
      rejected: 0,
      pending: 0,
      under_review: 0,
      withdrawn: 0
    };

    stats.forEach(stat => {
      totals[stat._id] = stat.count;
      totals.total += stat.count;
    });

    // Calculate success metrics
    const successRate = {
      overall: totals.total ? (totals.approved / totals.total * 100).toFixed(2) : 0,
      processed: (totals.approved + totals.rejected) ? 
        (totals.approved / (totals.approved + totals.rejected) * 100).toFixed(2) : 0
    };

    // Get trending programs
    const trendingPrograms = await Application.aggregate([
      { $match: { ...dateFilter, status: 'approved' } },
      {
        $group: {
          _id: '$program',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Get average processing time
    const processingTime = await Application.aggregate([
      {
        $match: {
          ...dateFilter,
          status: { $in: ['approved', 'rejected'] }
        }
      },
      {
        $project: {
          processingDays: {
            $divide: [
              { $subtract: ['$lastUpdated', '$submissionDate'] },
              1000 * 60 * 60 * 24 // Convert to days
            ]
          }
        }
      },
      {
        $group: {
          _id: null,
          averageProcessingDays: { $avg: '$processingDays' }
        }
      }
    ]);

    res.json({
      timeframe,
      statistics: {
        total: totals.total,
        approved: totals.approved,
        rejected: totals.rejected,
        pending: totals.pending,
        under_review: totals.under_review,
        withdrawn: totals.withdrawn
      },
      successRate,
      trendingPrograms,
      averageProcessingDays: processingTime[0]?.averageProcessingDays.toFixed(1) || 0
    });
  } catch (error) {
    console.error('Error calculating success rate:', error);
    res.status(500).json({ message: 'Error calculating success rate' });
  }
};

// Get application timeline
exports.getApplicationTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id)
      .populate('student', 'name email')
      .populate('institution', 'name country');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.json(application);
  } catch (error) {
    console.error('Error fetching application timeline:', error);
    res.status(500).json({ message: 'Error fetching application timeline' });
  }
};

// Update application status
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    application.status = status;
    application.lastUpdated = new Date();
    application.timeline.push({
      status,
      date: new Date(),
      note: note || `Status updated to ${status}`
    });

    await application.save();

    res.json(application);
  } catch (error) {
    console.error('Error updating application status:', error);
    res.status(500).json({ message: 'Error updating application status' });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application
      .findById(req.params.id)
      .populate('student', 'firstName lastName email')
      .populate('institution', 'name')
      .populate('reference.applicationId', '_id program status');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Transform the response to include both documents and documentUrls
    const response = application.toObject();
    response.documentUrls = application.documents.map(doc => doc.url);

    res.json(response);
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Only allow updates for pending applications
    if (application.status !== 'pending') {
      return res.status(403).json({ 
        message: 'Only pending applications can be updated' 
      });
    }

    const { documentUrls = [], ...updateData } = req.body;

    // Update documents if new ones are provided
    if (documentUrls.length > 0) {
      // Keep existing documents that are still in documentUrls
      const existingDocs = application.documents.filter(doc => 
        documentUrls.includes(doc.url)
      );

      // Add new documents
      const newUrls = documentUrls.filter(url => 
        !application.documents.some(doc => doc.url === url)
      );

      const newDocs = newUrls.map(url => ({
        url,
        originalName: url.split('/').pop() || 'document',
        filename: url.split('/').pop()?.split('.')[0] || 'document',
        uploadDate: new Date()
      }));

      updateData.documents = [...existingDocs, ...newDocs];
    }

    // Update the application
    Object.assign(application, updateData);
    application.lastUpdated = new Date();
    await application.save();

    // Populate necessary fields for response
    await application.populate('student', 'firstName lastName email');
    await application.populate('institution', 'name');

    res.json(application);
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({ message: error.message });
  }
};

// New endpoint to fetch all applications