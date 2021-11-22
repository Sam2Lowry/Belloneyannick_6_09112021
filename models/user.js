const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ 
    email: { type: String, unique:true, required: true },
    passwordHashed: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);