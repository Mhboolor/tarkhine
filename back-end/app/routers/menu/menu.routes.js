const MenuController = require("../../http/controllers/menu/menu.controller");
const checkPermission = require("../../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../utils/constans.utils");

const MenuRoutes = require("express").Router();

MenuRoutes.post(
  "/add",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  MenuController.createMenu
);
MenuRoutes.get("/list", MenuController.getListOfMenus);
MenuRoutes.patch(
  "/update/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  MenuController.updateMenu
);
MenuRoutes.delete(
  "/remove/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  MenuController.removeMenu
);
MenuRoutes.patch(
  "/add-submenu/:titleName",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  MenuController.createSubmenu
);

module.exports = MenuRoutes;
