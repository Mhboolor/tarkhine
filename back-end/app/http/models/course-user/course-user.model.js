const mongoose = require("mongoose");

const CourseUserSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Types.ObjectId, res: "courses" },
    user: { type: mongoose.Types.ObjectId, res: "users" },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON : {
      virtuals : true
    }
  }
);

const CourseUserModel = mongoose.model("courseUser", CourseUserSchema);

module.exports = CourseUserModel;
