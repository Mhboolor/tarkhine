const RoleController = require("../../../http/controllers/RBAC/role.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");

const stringToArray = require("../../../http/middlewares/stringToArray");
const { verifyAccessToken } = require("../../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const RoleRoutes = require("express").Router();

RoleRoutes.post(
  "/add",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  stringToArray("permissions"),
  RoleController.createNewRole
);
RoleRoutes.get(
  "/list",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  RoleController.getAllRoles
);
RoleRoutes.delete(
  "/remove/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  RoleController.removeRole
);
RoleRoutes.patch(
  "/update/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  stringToArray("permissions"),
  RoleController.updateRole
);

module.exports = RoleRoutes;
