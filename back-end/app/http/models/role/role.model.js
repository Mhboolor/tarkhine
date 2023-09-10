const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    description: { type: String, default: "" },
    permissions: {
      type: [mongoose.Types.ObjectId],
      ref: "permissions",
      default: [],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

roleSchema.virtual("permission_details", {
  ref: "permissions",
  localField: "_id",
  foreignField: "permissions",
});

const RoleModel = mongoose.model("roles", roleSchema);

module.exports = RoleModel;
