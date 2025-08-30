const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  purpose: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
