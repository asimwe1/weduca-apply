const mongoose = require('mongoose');

const englishTestSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  icon: { type: String }, // Optional URL to icon (could be stored as SVG string or URL)
});

module.exports = mongoose.model('EnglishTest', englishTestSchema);