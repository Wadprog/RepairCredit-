const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
    require:true
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
