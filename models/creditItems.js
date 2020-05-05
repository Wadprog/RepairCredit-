const mongoose = require("mongoose");

const creditItemSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  creditor: {
    type: String,
  },
  creditBureauData: [
    {
      date: { type: Date, required: true },
      name: { type: mongoose.Schema.Types.ObjectId, ref: "creditBureau" },
    },
  ],
  issue: [
    {
      description: { type: String },
    },
  ],
});

module.exports = CreditItem = mongoose.model("creditItem", creditItemSchema);
