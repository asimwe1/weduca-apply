const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  dateOfBirth: { type: Date },
  nationality: { type: String, required: true },
  gender: { type: String },
  status: { type: String, enum: ['active', 'pending', 'inactive'], default: 'active' },
  education: {
    level: { type: String },
    field: { type: String },
    school: { type: String },
    graduationYear: { type: Number },
  },
  notes: { type: String },
  joinDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);