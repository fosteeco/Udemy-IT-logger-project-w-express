const mongoose = require("mongoose");

const TechSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
});
module.exports = mongoose.model("tech", TechSchema, "techs");
