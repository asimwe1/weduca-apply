const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  flag: { type: String }, // URL to flag image
  schools: { type: Number }, // Number of schools (optional)
});

module.exports = mongoose.model('Country', countrySchema);