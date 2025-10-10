const express = require("express");
const router = express.Router();
const Book = require("../models/BookSchema");

router.post("/createBook", async (req, res) => {
  try {
    const {
      title,
      author,
      description,
      price,
      stock,
      isFeatured,
      isOnSale,
      discountPercent,
      coverImage,
      category,
    } = req.body;

    if (!title || !author || !description || !price || !stock || !category) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const newBook = new Book({
      title,
      author,
      description,
      price,
      stock,
      isFeatured,
      isOnSale,
      discountPercent,
      coverImage,
      category,
    });

    await newBook.save();

    return res.status(201).json({
      message: "Book created successfully",
      newBook,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/getBooks", async (req, res) => {
  try {
    const books = await Book.find().populate("category", "name");

    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate(
      "category",
      "name"
    );
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/updateBook/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("category", "name");
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.json({ message: "Book updated successfully", book });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.json({ message: "Book deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
