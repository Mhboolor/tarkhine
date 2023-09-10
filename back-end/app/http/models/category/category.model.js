const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    images: { type: [String], default: [] },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "categories",
      default: undefined,
    },
  },
  {
    id: false,
    toJSON: {
      virtuals: true,
    },
  }
);

CategorySchema.virtual("children", {
  ref: "categories",
  localField: "_id",
  foreignField: "parent",
});

const CategoryModel = mongoose.model("categories", CategorySchema);

module.exports = CategoryModel;
