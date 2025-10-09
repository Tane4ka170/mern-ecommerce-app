const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

// Middlewares
app.use(cors());
app.use(express.json());

// Connection to database
connectDB();

// Routes
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✨ Ready for it? Server's live on port ${PORT} ⚡`);
});
