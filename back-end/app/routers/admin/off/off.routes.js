const OffController = require("../../../http/controllers/off/off.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const OffRoutes = require("express").Router();

OffRoutes.post(
  "/add-product",
  checkPermission([PERMISSIONS.ADMIN]),
  OffController.createForProduct
);
OffRoutes.post("/add-course", checkPermission([PERMISSIONS.ADMIN]), OffController.createForCourse);
OffRoutes.post(
  "/get-one-product/:code",
  checkPermission([PERMISSIONS.ADMIN]),
  OffController.getOneForProduct
);
OffRoutes.post(
  "/get-one-course/:code",
  checkPermission([PERMISSIONS.ADMIN]),
  OffController.getOneForCourse
);
OffRoutes.post("/set-all", checkPermission([PERMISSIONS.ADMIN]), OffController.setOnAll);
OffRoutes.get("/list", checkPermission([PERMISSIONS.ADMIN]), OffController.getAll);
OffRoutes.delete("/remove/:id", checkPermission([PERMISSIONS.ADMIN]), OffController.removeOff);

module.exports = OffRoutes;
