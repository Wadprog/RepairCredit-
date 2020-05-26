const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
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
  addresses: [
    {
      state: { type: String, required: true },
      city: { type: String, required: true },
      zipcode: { type: String, required: true },
      fax: { type: String, required: true },
      description: { type: String },
      status: { type: String, default: "current" },
    },
  ],
  levelAccess: { type: String },
  userName: { type: String },
  password: { type: String },
});

module.exports = Employee = mongoose.model("employee", employeeSchema);
