const mongoose = require("mongoose");


const Episodes = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    type: { type: String, default: "unlock" },
    time: { type: String, required: true },
    videoAddress: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

Episodes.virtual("videoURL").get(function () {
  return `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}/${this.videoAddress}`;
});

const Chapter = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, default: "" },
    episodes: { type: [Episodes], default: [] },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    short_text: { type: String, required: true },
    text: { type: String, required: true },
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
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    type: {
      type: String,
      default: "free" /*free,cash,special*/,
      required: true,
    },
    status: {
      type: String,
      default: "notStarted" /*notStarted,completed,holding*/,
    },
    teacher: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    chapters: { type: [Chapter], default: [] },
    students: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

schema.index({ title: "text", short_text: "text", text: "text" });

const CourseModel = mongoose.model("courses", schema);
module.exports = CourseModel;
