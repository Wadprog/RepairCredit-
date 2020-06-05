const mongoose = require("mongoose");
const AcessLevel = require("../utils/consts/Permissions/AccessLevel");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 0//AcessLevel.Low
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
