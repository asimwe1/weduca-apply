const mongoose = require('mongoose');

const applicationStepSchema = new mongoose.Schema({
  stepNumber: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }, // URL to icon
});

module.exports = mongoose.model('ApplicationStep', applicationStepSchema);