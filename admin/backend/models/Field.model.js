const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  field: { type: String, required: true, unique: true },
  icon: { type: String, required: true }, // URL to icon
});

module.exports = mongoose.model('Field', fieldSchema);