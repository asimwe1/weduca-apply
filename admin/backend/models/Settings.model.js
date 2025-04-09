const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  adminName: { type: String, default: 'Admin User' },
  email: { type: String, default: 'admin@wedukaapply.com' },
  timeZone: { type: String, default: 'UTC-05:00' },
  language: { type: String, default: 'English (US)' },
  dateFormat: { type: String, default: 'MM/DD/YYYY' },
  darkMode: { type: Boolean, default: false },
  notifications: {
    email: { type: Boolean, default: true },
    newSchool: { type: Boolean, default: true },
    newApplication: { type: Boolean, default: true },
    systemUpdates: { type: Boolean, default: false },
  },
  security: {
    twoFactor: { type: Boolean, default: false },
    loginNotifications: { type: Boolean, default: true },
  },
});

module.exports = mongoose.model('Settings', settingsSchema);