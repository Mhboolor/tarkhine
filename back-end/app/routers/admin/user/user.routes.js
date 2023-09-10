const UserController = require("../../../http/controllers/user/user.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const UserRoutes = require("express").Router();


UserRoutes.patch(
  "/update-role",
  UserController.changeRoles
);
UserRoutes.post(
  "/ban/:id",checkPermission([PERMISSIONS.ADMIN]),
  UserController.banUser
);
UserRoutes.get(
  "/list",checkPermission([PERMISSIONS.ADMIN]),
  UserController.getAllUsers
);

module.exports = UserRoutes;
