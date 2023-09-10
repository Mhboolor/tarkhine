const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    msg: {
      type: String,
      required: true,
    },
    adminID: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    see: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
);

const NotificationModel = mongoose.model("notification", NotificationSchema);

module.exports = NotificationModel;
