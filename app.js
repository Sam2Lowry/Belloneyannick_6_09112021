require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

const app = express();
const mongoose = require("mongoose");
app.use(express.json());

// Base de donnée MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error)); // error handling
db.once("open", () => console.log("Connected to MongoDB")); // success message

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  next();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  
});

app.use("/api/auth", userRoutes);
// app.use("/api/sauces", sauceRoutes);
module.exports = app;