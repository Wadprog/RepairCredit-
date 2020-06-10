const mongoose = require("mongoose");
const AcessLevel = require("../utils/consts/Permitions/AccessLevel");
const CustomerLevel = require("../utils/consts/Permitions/CustomerLevel");
const personSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastnName: {
    type: String,
   
  },

  middleName: {
    type: String,
    
  },
  suffix: {
    type: String,
    
  },
  dob: {
    type: Date,
    
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  type: {
    type: Number,
    default: CustomerLevel.Lead,
  },
  status: {
    type: Boolean,
    default: true, //active
  },
  email: {
    type: String,
    
  },
  phoneH: { type: String },
  phoneW: { type: String },
  phoneM: { type: String },
  fax: { type: String },
  AccessLevel: {
    type: Number,
    
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
  },
  referredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
  },
  userName: { type: String },
  password: { type: String },
});

module.exports = Person = mongoose.model("pesorn", personSchema);
