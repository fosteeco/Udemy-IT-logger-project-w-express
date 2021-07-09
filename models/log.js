const mongoose = require("mongoose");

// message
// attention
// tech
// date
const LogSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  attention: {
    type: Boolean,
    required: true,
  },
  tech: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "techs",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("log", LogSchema, "logs");
