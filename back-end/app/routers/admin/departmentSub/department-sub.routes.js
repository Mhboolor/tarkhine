const DepartmentSubController = require("../../../http/controllers/departmentSub/department-sub.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const DepartmentSubRoutes = require("express").Router();

DepartmentSubRoutes.post(
  "/add",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentSubController.createDepartmentSub
);
DepartmentSubRoutes.get("/list", DepartmentSubController.listOfDepartmentSub);
DepartmentSubRoutes.patch(
  "/update/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentSubController.updateDepartmentSub
);
DepartmentSubRoutes.delete(
  "/remove/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentSubController.removeDepartmentSub
);

module.exports = DepartmentSubRoutes;
