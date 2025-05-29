const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String },
  address: { type: String },
  image: { type: String },
  description: { type: String },
  country: { type: String },
  type: { type: String },
  email: { type: String },
  website: { type: String },
  programs: { type: Number, default: 0 },
  students: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  details: {
    schoolType: { type: String },
    tuition: { type: String },
    costOfLiving: { type: String },
    undergradDuration: { type: String },
    applicationFee: { type: String },
    gradDuration: { type: String },
  },
});

module.exports = mongoose.model('Institution', institutionSchema);