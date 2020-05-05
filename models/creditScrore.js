const mongoose = require("mongoose");

const creditScoreSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  score: [
    {
      score: { type: Number, required: true },
      bureau: { type: mongoose.Schema.Types.ObjectId, ref: "creditBureau" },
    },
  ],

  datePulled: {
    type: Date,
    default: Date.now,
  },
  monotoringService: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "monotoringService",
  },
});

module.exports = CreditScore = mongoose.model("creditScore", creditScoreSchema);
