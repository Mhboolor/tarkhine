const PermissionController = require("../../../http/controllers/RBAC/permission.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const PermissionRoutes = require("express").Router();

PermissionRoutes.post(
  "/add",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.createNewPermission
);
PermissionRoutes.get(
  "/list",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.getAllPermission
);
PermissionRoutes.delete(
  "/remove/:id",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.removePermission
);
PermissionRoutes.patch(
  "/update/:id",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionController.updatePermission
);

module.exports = PermissionRoutes;
