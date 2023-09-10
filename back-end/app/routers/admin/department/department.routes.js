const DepartmentController = require("../../../http/controllers/department/department.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const DepartmentRoutes = require("express").Router();

DepartmentRoutes.post(
  "/add",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentController.createDepartment
);
DepartmentRoutes.get("/list", DepartmentController.listOfDepartments);

DepartmentRoutes.delete(
  "/remove/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentController.removeDepartment
);
DepartmentRoutes.patch(
  "/update/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentController.updateDepartment
);

module.exports = DepartmentRoutes;
