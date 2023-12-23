const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  events: {
    type: Array,
  },
  societies: {
    type: Array,
  },
  email: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("registeration", userSchema);

module.exports = User;
