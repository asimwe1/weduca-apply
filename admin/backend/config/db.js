// // config/db.js
// const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

// const uri = process.env.MONGODB_URI;

// // Create a MongoClient with options
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// let db; // To store the database connection

// async function connectDB () {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     db = client.db('weduca-apply'); // Specify your database name
//     console.log('MongoDB connected successfully');
//     return db; // Return the database instance for use elsewhere
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// // Function to get the database instance after connection
// const getDB = () => {
//   if (!db) {
//     throw new Error('Database not connected. Call connectDB first.');
//   }
//   return db;
// };

// // Export the connection function and getter
// module.exports = { connectDB, getDB };



// config/db.js
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const connectDB = async () => {
  try {
    // Check if MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds to select server
      socketTimeoutMS: 45000, // 45 seconds for socket timeout
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);

    // Set up connection event handlers
    mongoose.connection.on('error', err => {
      console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected');
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = { connectDB };