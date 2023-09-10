const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
  {
    AnswerUser: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    comment: { type: String, required: true },
    openToComment: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const CommentSchema = new mongoose.Schema(
  {
    show: { type: Number, required: true, default: 0 },
    commentUser: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    comment: { type: String, required: true },
    score: { type: Number, required: true },
    openToComment: { type: Boolean, default: true },
    answers: { type: [AnswerSchema], default: [] },
    blogName: { type: mongoose.Types.ObjectId, ref: "blogs" },
    productName: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    courseName: {
      type: mongoose.Types.ObjectId,
      ref: "courses",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;
