const mongoose = require("mongoose");

const afilliateSchema = mongoose.Schema({
  mail: {
    type: String,
    required: true,
  },
  phones: [
    {
      number: { type: String, required: true },
      classification: { type: String, required: true },
    },
  ],
  address: {
    state: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    fax: { type: String, required: true },
    description: { type: String },
    geo: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
});

module.exports = Afilliate = mongoose.model("afilliate", afilliateSchema);
