const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    departmentID: {
      type: mongoose.Types.ObjectId,
      ref: "departments",
      required: true,
    },
    departmentSubID: {
      type: mongoose.Types.ObjectId,
      ref: "departmentsSub",
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    answer: {
      type: Number,
      required: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "tickets",
      required: false,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
      required: false,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "courses",
      required: false,
    },
    isAnswer: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const TicketModel = mongoose.model("tickets", TicketSchema);

module.exports = TicketModel;
