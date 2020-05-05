const mongoose = require("mongoose");

const afilliateSchema = mongoose.Schema({
  mail: {
    type: String,
    required: true,
  },
  phone: [
    {
      arreaCode: { type: Number, required: true },
      number: { type: Number, required: true },
      extension: { type: Number },
      current: { type: Boolean, default: true },
      tag: { type: mongoose.Schema.Types.ObjectId, ref: "phonetags" }, // Home, work
    },
  ],
  address: {
    state: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    fax: { type: String, required: true },
    description: { type: String },
  },
});

module.exports = Afilliate = mongoose.model("afilliate", afilliateSchema);
