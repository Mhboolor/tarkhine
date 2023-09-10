const NotificationRoutes = require("express").Router();
const NotificationController = require("../../../http/controllers/notification/notification.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");
NotificationRoutes.post(
  "/add",
  checkPermission([PERMISSIONS.ADMIN]),
  NotificationController.create
);
NotificationRoutes.get(
  "/all-notifications",
  checkPermission([PERMISSIONS.ADMIN]),
  NotificationController.getAllNotifications
);
NotificationRoutes.patch(
  "/see/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  NotificationController.see
);

module.exports = NotificationRoutes;
