const mongoose = require("mongoose");

const monitoringServiceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = MonitoringService = mongoose.model(
  "monitoringService",
  monitoringServiceSchema
);
