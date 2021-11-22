const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHashed: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("user", userSchema);
