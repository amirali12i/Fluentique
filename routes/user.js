// Backend/routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../model/User'); // Assuming you have a User model
const bcrypt = require('bcryptjs'); // You might be using bcrypt for password hashing

// Temporary route to create a specific user
router.get('/create-specific-user', async (req, res) => {
  try {
    // Check if the user already exists
    let user = await User.findOne({ email: "Nathaniellorian@gmail.com" });
    if (user) {
      return res.status(400).send('User already exists');
    }

    // If not, create a new user
    const newUser = new User({
      email: "Nathaniellorian@gmail.com",
      password: bcrypt.hashSync('123456', 10) // Hash the password
    });

    await newUser.save(); // Save the new user
    res.send('User created successfully');
  } catch (error) {
    res.status(500).send("Error creating user: " + error.message);
  }
});

module.exports = router;
