var express = require('express');
var router = express.Router();
const User= require('../models/userModel')
// const User = require('./models/userModel'); // Import your User model
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});


router.post("/login", async (req, res) => {
    const { name, password } = req.body; // Destructure name and password from req.body

    try {
        // Create a new user document using the User model
        const newUser = new User({
            name: name,
            password: password
        });

        // Save the new user document to the database
        await newUser.save();

        // Optionally, you can send a response indicating success
        res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        // Handle any errors that occur during saving
        console.error("Error saving user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports = router;

