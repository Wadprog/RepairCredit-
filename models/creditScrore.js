const mongoose = require("mongoose");

const creditScoreSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  transunuion: {
    type: String,
    required: true,
  },
  experian: {
    type: String,
    required: true,
  },
  equifax: {
    type: String,
    required: true,
  },

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
