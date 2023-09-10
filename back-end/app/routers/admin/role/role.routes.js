const RoleController = require("../../../http/controllers/RBAC/role.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");

const stringToArray = require("../../../http/middlewares/stringToArray");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const RoleRoutes = require("express").Router();

RoleRoutes.post(
  "/add",
  checkPermission([PERMISSIONS.ADMIN]),
  stringToArray("permissions"),
  RoleController.createNewRole
);
RoleRoutes.get("/list", checkPermission([PERMISSIONS.ADMIN]), RoleController.getAllRoles);
RoleRoutes.delete(
  "/remove/:field",
  checkPermission([PERMISSIONS.ADMIN]),
  RoleController.removeRole
);
RoleRoutes.patch(
  "/update/:field",
  checkPermission([PERMISSIONS.ADMIN]),
  stringToArray("permissions"),
  RoleController.updateRole
);

module.exports = RoleRoutes;
