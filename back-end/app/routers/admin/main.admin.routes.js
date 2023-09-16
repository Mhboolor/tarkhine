const { verifyAccessToken } = require("../../http/middlewares/verifyAccessToken.middleware");
const CategoryRoutes = require("./category/category.routes");
const commentRoutes = require("./comment/comment.routes");
const InfoRoutes = require("./info/info.routes");
const OffRoutes = require("./off/off.routes");
const PermissionRoutes = require("./permission/permissioin.routes");
const ProductRoutes = require("./product/product.routes");
const RoleRoutes = require("./role/role.routes");
const UserRoutes = require("./user/user.routes");

const MainAdminRoutes = require("express").Router();

MainAdminRoutes.use("/category", CategoryRoutes);
MainAdminRoutes.use("/product", verifyAccessToken, ProductRoutes);
MainAdminRoutes.use("/user", verifyAccessToken, UserRoutes);
MainAdminRoutes.use("/comment", verifyAccessToken, commentRoutes);
MainAdminRoutes.use("/off", verifyAccessToken, OffRoutes);
MainAdminRoutes.use("/permission", verifyAccessToken, PermissionRoutes);
MainAdminRoutes.use("/role", verifyAccessToken, RoleRoutes);
MainAdminRoutes.use("/info", verifyAccessToken, InfoRoutes);

module.exports = MainAdminRoutes;
