const ContactController = require("../../http/controllers/contact/contact.controller");
const checkPermission = require("../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../utils/constans.utils");
const ContactRoutes = require("express").Router();

ContactRoutes.post("/add", ContactController.createContact);
ContactRoutes.get("/list", checkPermission([PERMISSIONS.ADMIN]), ContactController.getAllContact);
ContactRoutes.delete(
  "/remove/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  ContactController.removeContact
);
ContactRoutes.post(
  "/answer",
  checkPermission([PERMISSIONS.ADMIN]),
  ContactController.answerContact
);

module.exports = ContactRoutes;
