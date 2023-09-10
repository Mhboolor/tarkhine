const HomeRoutes = require("express").Router();
const HomeController = require("../../http/controllers/home/home.controller");

HomeRoutes.get("/", HomeController.indexPage);

module.exports = HomeRoutes;
