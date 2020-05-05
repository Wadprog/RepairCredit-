const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  notes: [
    {
      type: String,
      required: true,
    },
  ],
  status: {
    type: String,
    default: "LEAD",
  },
  referredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "afiliate",
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
  },
  address: [{}],
  phone: [{}],
  email: [{}],
  monitoringService: {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "monitoringService",
    },
    userName: { type: String },
    password: { type: String },
  },
});

module.exports = Client = mongoose.model("client", clientSchema);
