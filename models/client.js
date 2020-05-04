const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: { type: String, required: true },
  ssn: { type: String, required: true },
  dbo: { type: String, required: true },
  notes: { type: String, required: true },
  status: { type: String, required: true },
  referredBy: { type: String, required: true },
  assignedTo: { type: String, required: true },
});

module.exports = Client = mongoose.model("client", clientSchema);
