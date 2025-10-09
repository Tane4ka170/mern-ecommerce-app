const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ message: "Enter your email and password" });
  }
  let user = await User.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ message: "User with this information already exists" });
  }
  const newUser = new User({ email, password, name });
  await newUser.save();
  return res.status(201).json({ message: "User registered successfully" });
});

module.exports = router;
