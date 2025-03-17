const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    isReferred: {
        type: Boolean,
        required: true
    },
    referredName: {
        type: String
    },
    referredEmail: {
        type: String
    },
    comments: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', messageSchema);