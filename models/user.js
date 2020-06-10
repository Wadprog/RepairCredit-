const mongoose = require("mongoose");
const AcessLevel = require('../utils/consts/Permitions/AccessLevel')// require("../utils/consts/Permitions/AccessLevel");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  },
  AccessLevel: {
    type: Number,
    default: AcessLevel.client
  },
  status: {
    type: Boolean,
    default: true
  },
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person"
  },
});

module.exports = User = mongoose.model("user", userSchema);
