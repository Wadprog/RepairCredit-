const mongoose = require("mongoose");

const creditItemSchema = mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
  },

  creditBureauData: [
    {
      creditor: {
        type: String,
        required: false,
      },
      creditData: [
        {
          date: { type: Date, default: Date.now() },
          name: { type: String },
          account: { type: String, required: false },
          accountType: { type: String, required: false },
          accountTypeDetail: { type: String, required: false },
          bureauCode: { type: String, required: false },
          accountStatus: { type: String, required: false },
          monthlyPayment: { type: String, required: false },
          dateOpened: { type: String, required: false },
          balance: { type: String, required: false },
          terms: { type: String, required: false },
          highCredit: { type: String, required: false },
          creditLimit: { type: String, required: false },
          pastDue: { type: String, required: false },
          paymentStatus: { type: String, required: false },
          lastReported: { type: String, required: false },
          comments: { type: String },
          dateLastActive: { type: String, required: false },
          dateOfLastPayment: { type: String, required: false },
        },
      ],
    },
  ],
});

module.exports = CreditItem = mongoose.model("creditItem", creditItemSchema);
