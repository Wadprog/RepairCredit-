const mongoose = require("mongoose");

const creditBureauSchema = mongoose.Schema({
  name: {
    type: String,
    required: String,
  },
  address: [
    {
      state: { type: String, required: true },
      city: { type: String, required: true },
      zipcode: { type: String, required: true },
      fax: { type: String, required: true },
      description: { type: String },
    },
  ],

  phone: [
    {
      arreaCode: { type: Number, required: true },
      number: { type: Number, required: true },
      extension: { type: Number },
      current: { type: Boolean, default: true },
      tag: { type: mongoose.Schema.Types.ObjectId, ref: "phonetags" }, // Home, work
    },
  ],
});

module.exports = CreditBureau = mongoose.model(
  "creditBureau",
  creditBureauSchema
);
