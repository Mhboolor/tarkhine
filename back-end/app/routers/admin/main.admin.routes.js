const { verifyAccessToken } = require("../../http/middlewares/verifyAccessToken.middleware");
const BlogRoutes = require("./blog/blog.routes");
const CategoryRoutes = require("./category/category.routes");
const ChapterRoutes = require("./chpater/chapter.routes");
const commentRoutes = require("./comment/comment.routes");
const CourseRoutes = require("./course/course.routes");
const DepartmentRoutes = require("./department/department.routes");
const DepartmentSubRoutes = require("./departmentSub/department-sub.routes");
const EpisodeRoutes = require("./episode/episode.routes");
const InfoRoutes = require("./info/info.routes");
const NotificationRoutes = require("./notification/notification.routes");
const OffRoutes = require("./off/off.routes");
const PermissionRoutes = require("./permission/permissioin.routes");
const ProductRoutes = require("./product/product.routes");
const RoleRoutes = require("./role/role.routes");
const UserRoutes = require("./user/user.routes");

const MainAdminRoutes = require("express").Router();

MainAdminRoutes.use("/category", CategoryRoutes);
MainAdminRoutes.use("/blog", verifyAccessToken, BlogRoutes);
MainAdminRoutes.use("/product", verifyAccessToken, ProductRoutes);
MainAdminRoutes.use("/user", verifyAccessToken, UserRoutes);
MainAdminRoutes.use("/comment", verifyAccessToken, commentRoutes);
MainAdminRoutes.use("/department", DepartmentRoutes);
MainAdminRoutes.use("/departmentSub", DepartmentSubRoutes);
MainAdminRoutes.use("/off", verifyAccessToken, OffRoutes);
MainAdminRoutes.use("/permission", verifyAccessToken, PermissionRoutes);
MainAdminRoutes.use("/role", verifyAccessToken, RoleRoutes);
MainAdminRoutes.use("/courses", verifyAccessToken, CourseRoutes);
MainAdminRoutes.use("/chapter", verifyAccessToken, ChapterRoutes);
MainAdminRoutes.use("/episode", verifyAccessToken, EpisodeRoutes);
MainAdminRoutes.use("/info", verifyAccessToken, InfoRoutes);
MainAdminRoutes.use("/notification",verifyAccessToken, NotificationRoutes);

module.exports = MainAdminRoutes;
