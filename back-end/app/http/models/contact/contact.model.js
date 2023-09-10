const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    answer: { type: Boolean, required: true, default: false },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("contacts", ContactSchema);

module.exports = ContactModel;
