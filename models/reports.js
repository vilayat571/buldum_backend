const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  categories: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ReportSchema", ReportSchema);
