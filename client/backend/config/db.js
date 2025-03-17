const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Atlas via Mongoose');
    } catch (error) {
        console.error('MongoDB Atlas connection error:', error);
        process.exit(1); // Exit the app if the connection fails
    }
}

module.exports = connectDB;