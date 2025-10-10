const express = require("express");
const router = express.Router();
const Category = require("../models/CategorySchema");

router.post("/createCategory", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const newCategory = new Category({
      name,
    });
    await newCategory.save();
    res
      .status(201)
      .json({ message: "Category created successfully" }, newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
