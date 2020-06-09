const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    required: true,
  },
  phones: [
    {
      arreaCode: { type: Number, required: true },
      number: { type: Number, required: true },
      extension: { type: Number },
      current: { type: Boolean, default: true },
      tag: { type: mongoose.Schema.Types.ObjectId, ref: "phoneTag" },
    },
  ],
  AcessLevel: { type: String, required: true },
  userName: { type: String },
  password: { type: String },
});

module.exports = Person = mongoose.model("pesorn", personSchema);
