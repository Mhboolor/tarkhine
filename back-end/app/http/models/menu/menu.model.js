const mongoose = require("mongoose");

const submenuSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, default: "" },
});

const MenuSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, default: "" },
  submenu: { type: [submenuSchema], default: [] },
});

const MenuModel = mongoose.model("menus", MenuSchema);

module.exports = MenuModel;
