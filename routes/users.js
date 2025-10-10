const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ email, password: hashedPassword, name });
  await newUser.save();

  const token = jwt.sign({ email, id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });

  return res
    .status(201)
    .json({ message: "User registered successfully", user: newUser, token });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Enter your email and password" });
  }

  let user = await User.findOne({ email });
  if (user && bcrypt.compare(password, user.password)) {
    let token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });
    return res.status(200).json({ message: "Login successful", user, token });
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
});

module.exports = router;
