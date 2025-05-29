const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  settings: {
    adminName: { type: String, default: "Admin User" },
    emailAddress: { type: String, default: "admin@WedukaApply.com" },
    timeZone: { type: String, default: "(UTC-05:00) Eastern Time (US & Canada)" },
    language: { type: String, default: "English (US)" },
    dateFormat: { type: String, default: "MM/DD/YYYY" },
    darkMode: { type: Boolean, default: false },
    emailNotifications: { type: Boolean, default: true },
    newSchoolRegistration: { type: Boolean, default: true },
    newStudentApplication: { type: Boolean, default: true },
    systemUpdates: { type: Boolean, default: false },
    twoFactorAuth: { type: Boolean, default: false },
    loginNotifications: { type: Boolean, default: true },
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);