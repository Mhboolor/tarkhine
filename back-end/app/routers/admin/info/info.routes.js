const InfoController = require("../../../http/controllers/info/infos.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const InfoRoutes = require("express").Router();

InfoRoutes.get("/p-admin", checkPermission([PERMISSIONS.ADMIN]), InfoController.getPAdmin);
InfoRoutes.get("/admins", checkPermission([PERMISSIONS.ADMIN]), InfoController.admins);

module.exports = InfoRoutes;
