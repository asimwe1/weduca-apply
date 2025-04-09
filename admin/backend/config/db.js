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
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds to select server
      socketTimeoutMS: 45000, // 45 seconds for socket timeout
    });
    console.log('MongoDB connected successfully');

    // Test server responsiveness
    const adminDb = mongoose.connection.db.admin();
    await adminDb.ping();
    console.log('Ping successful: MongoDB server is responsive');

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