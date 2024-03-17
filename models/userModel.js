// models/User.js
const mongoose = require('mongoose');

// Define the schema for the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
