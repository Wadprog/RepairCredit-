const mongoose = require("mongoose");

const PhoneTagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = PhoneTag = mongoose.model("phoneTag", PhoneTagSchema);
