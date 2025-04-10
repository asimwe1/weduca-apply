const mongoose = require('mongoose');
const User = require('./models/User.model');
const { connectDB } = require('./config/db');

connectDB();

const seedAdmin = async () => {
  try {
    await User.deleteMany();
    await User.create({
      email: 'admin@weducaapplyltd.com',
      password: 'admin123',
    });
    console.log('Admin user seeded successfully');
  } catch (error) {
    console.error('Error seeding admin:', error);
  } finally {
connectDB
  }
};

seedAdmin();