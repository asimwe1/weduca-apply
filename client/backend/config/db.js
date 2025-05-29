require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;
console.log('Mongo URI:', uri); // Debug

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    connectTimeoutMS: 30000,
    socketTimeoutMS: 60000
});

async function connectDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return client; // Return client for persistent use
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
}

module.exports = connectDB;