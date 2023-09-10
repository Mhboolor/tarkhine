const CategoryController = require("../../../http/controllers/category/category.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../../utils/constans.utils");
const { uploadFile } = require("../../../utils/multer.utils");

const CategoryRoutes = require("express").Router();

CategoryRoutes.post(
  "/add",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.array("images", 1),
  CategoryController.addCategory
);
CategoryRoutes.get("/list", CategoryController.getAllCategories);
CategoryRoutes.get("/getOne/:field", CategoryController.getOneCategory);
CategoryRoutes.get("/children/:parent", CategoryController.getChildrenOfParent);
CategoryRoutes.delete(
  "/remove/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  CategoryController.removeCategory
);
CategoryRoutes.patch(
  "/update/:field",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.array("images", 1),
  CategoryController.updateCategoryTitle
);

module.exports = CategoryRoutes;
