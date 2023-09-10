const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  { timestamps: true }
);

const DepartmentModel = mongoose.model("departments", DepartmentSchema);

module.exports = DepartmentModel;
