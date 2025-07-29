const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
