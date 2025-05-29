const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  url: { type: String, required: true },
  originalName: { type: String, required: true },
  filename: { type: String, required: true },
  size: { type: Number },
  format: { type: String },
  contentType: { type: String },
  uploadDate: { type: Date, default: Date.now }
});

const applicationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  institution: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution', required: true },
  program: { type: String, required: true },
  submissionDate: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['pending', 'under_review', 'approved', 'rejected', 'withdrawn'],
    default: 'pending' 
  },
  documents: [documentSchema], // Use the new document schema
  reference: {
    applicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
    status: { type: String },
    date: { type: Date }
  },
  applicationFee: {
    amount: { type: Number },
    currency: { type: String, default: 'USD' },
    paid: { type: Boolean, default: false }
  },
  timeline: [{
    status: { type: String },
    date: { type: Date },
    note: { type: String }
  }],
  feedback: {
    adminNotes: { type: String },
    studentNotes: { type: String }
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add index for better query performance
applicationSchema.index({ student: 1, institution: 1, status: 1 });
applicationSchema.index({ submissionDate: -1 });
applicationSchema.index({ 'reference.applicationId': 1 });

// Virtual for application age
applicationSchema.virtual('applicationAge').get(function() {
  return Math.floor((Date.now() - this.submissionDate) / (1000 * 60 * 60 * 24));
});

// Virtual for referenced applications
applicationSchema.virtual('referencedApplications', {
  ref: 'Application',
  localField: '_id',
  foreignField: 'reference.applicationId',
  justOne: false
});

// Virtual for documentUrls (for backward compatibility)
applicationSchema.virtual('documentUrls').get(function() {
  return this.documents.map(doc => doc.url);
});

module.exports = mongoose.model('Application', applicationSchema);

