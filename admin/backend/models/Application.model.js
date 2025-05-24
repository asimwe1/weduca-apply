const mongoose = require('mongoose');

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
  applicationFee: {
    amount: { type: Number },
    currency: { type: String, default: 'USD' },
    paid: { type: Boolean, default: false }
  },
  documents: [{
    type: { type: String },
    name: { type: String },
    status: { type: String, enum: ['pending', 'approved', 'rejected'] },
    uploadDate: { type: Date }
  }],
  academicDetails: {
    gpa: { type: Number },
    testScores: {
      type: { type: String },
      score: { type: Number },
      date: { type: Date }
    }
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

// Virtual for application age
applicationSchema.virtual('applicationAge').get(function() {
  return Math.floor((Date.now() - this.submissionDate) / (1000 * 60 * 60 * 24));
});

module.exports = mongoose.model('Application', applicationSchema);

