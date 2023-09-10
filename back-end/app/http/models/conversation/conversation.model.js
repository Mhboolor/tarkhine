const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Types.ObjectId, ref: "users" },
  message: { type: String },
  dataTime: { type: String },
  type: { type: String, default: "msg" },
});

const locationSchema = new mongoose.Schema({
  sender: { type: mongoose.Types.ObjectId, ref: "users" },
  location: { type: Object, default: {} },
  dataTime: { type: Number },
});


const roomSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  messages: { type: [messageSchema], default: [] },
  locations: { type: [locationSchema], default: [] },
});

const conversationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  endpoint: { type: String, required: true },
  rooms: { type: [roomSchema], default: [] },
});

const ConversationModel = mongoose.model("conversation", conversationSchema);

module.exports = ConversationModel;
