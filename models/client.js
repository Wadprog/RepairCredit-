const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  persorn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
  },
  ssn: {
    type: String,
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
  monitoringService: [
    {
      name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "monitoringService",
      },
      userName: { type: String },
      password: { type: String },
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
});

module.exports = Client = mongoose.model("client", clientSchema);
