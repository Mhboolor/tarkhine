const mongoose = require("mongoose");

const OffSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    percent: { type: String, required: true },
    product: { type: mongoose.Types.ObjectId, ref: "products" },
    course: { type: mongoose.Types.ObjectId, ref: "courses" },
    max: { type: Number, required: true },
    uses: { type: Number, required: true },
    creator: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  },
  {
    timestamps: true,
  }
);

const OffModel = mongoose.model("offs", OffSchema);

module.exports = OffModel;
