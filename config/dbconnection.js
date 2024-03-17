const mongoose = require("mongoose");

const connectMongodb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/LoginSignupTutorial");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

module.exports = connectMongodb;