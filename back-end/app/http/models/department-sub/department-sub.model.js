const mongoose = require("mongoose");

const DepartmentSubSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    parent: { type: mongoose.Types.ObjectId, ref: "departments" },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);


const DepartmentSubModel = mongoose.model("departmentsSub", DepartmentSubSchema);

module.exports = DepartmentSubModel;
