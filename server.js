const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✨ Ready for it? Server's live on port ${PORT} ⚡`);
});
