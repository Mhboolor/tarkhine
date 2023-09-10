const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    short_text: { type: String, required: true },
    images: { type: [String], required: true },
    tags: { type: [String], default: [] },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    likes: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
    dislikes: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
    bookmarks: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);
BlogSchema.index({ title: "text", text: "text", short_text: "text" });
const BlogModel = mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
