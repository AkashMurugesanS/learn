const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  homeName: {
    type: String,
    // unique:
  },
  kitchen: {
    type: Number,
  },
  bathroom: {
    type: Number,
  },
  room: {
    type: Number,
  },
  hall: {
    type: Number,
  },
  diningTable: {
    type: Number,
  },
});

module.exports = mongoose.model("home", homeSchema);
