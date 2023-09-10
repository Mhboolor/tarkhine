const mongoose = require("mongoose");

const BanSchema = new mongoose.Schema(
  {
    mobile: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const BanModel = mongoose.model("bans", BanSchema);

module.exports = BanModel;
