require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error)); // error handling
db.once("open", () => console.log("Connected to MongoDB")); // success message

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
