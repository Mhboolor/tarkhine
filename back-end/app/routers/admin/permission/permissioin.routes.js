const PermissionController = require("../../../http/controllers/RBAC/permission.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const PermissionRoutes = require("express").Router();

PermissionRoutes.post(
  "/add",
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.createNewPermission
);
PermissionRoutes.get(
  "/list",
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.getAllPermission
);
PermissionRoutes.delete(
  "/remove/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.removePermission
);
PermissionRoutes.patch(
  "/update/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.updatePermission
);

module.exports = PermissionRoutes;
