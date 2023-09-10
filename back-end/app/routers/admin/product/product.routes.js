const ProductController = require("../../../http/controllers/product/product.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const stringToArray = require("../../../http/middlewares/stringToArray");
const { PERMISSIONS } = require("../../../utils/constans.utils");
const { uploadFile } = require("../../../utils/multer.utils");

const ProductRoutes = require("express").Router();

ProductRoutes.post(
  "/add",
  checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.array("images", 10),
  stringToArray("tags", "colors"),
  ProductController.addProduct
);
ProductRoutes.get("/list", ProductController.listOfProduct);
ProductRoutes.get("/search", ProductController.searchOfProduct);
ProductRoutes.patch(
  "/add-features/:field",
  checkPermission([PERMISSIONS.ADMIN]),
  ProductController.addFeaturesForProduct
);
ProductRoutes.patch(
  "/remove-feature/:productID",
  checkPermission([PERMISSIONS.ADMIN]),
  ProductController.removeFeature
);
ProductRoutes.delete(
  "/remove-product/:field",
  checkPermission([PERMISSIONS.ADMIN]),
  ProductController.removeProduct
);
ProductRoutes.patch(
  "/update-product/:field",
  checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.array("images", 10),
  stringToArray("tags", "colors"),
  ProductController.updateProduct
);
ProductRoutes.get("/:field", ProductController.getOneProduct);
ProductRoutes.get("/like/:productID", ProductController.likedProduct);
ProductRoutes.get("/dislike/:productID", ProductController.dislikedProduct);
ProductRoutes.get("/bookmark/:productID", ProductController.bookmarkedProduct);
module.exports = ProductRoutes;
