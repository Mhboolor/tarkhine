const BlogController = require("../../../http/controllers/blog/blog.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const stringToArray = require("../../../http/middlewares/stringToArray");
const { PERMISSIONS } = require("../../../utils/constans.utils");
const { uploadFile } = require("../../../utils/multer.utils");

const BlogRoutes = require("express").Router();

BlogRoutes.post(
  "/add",
  checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.array("images", 10),
  stringToArray("tags"),
  BlogController.createBlog
);
BlogRoutes.patch(
  "/update/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.array("images", 10),
  stringToArray("tags"),
  BlogController.updateBlog
);
BlogRoutes.get("/list", BlogController.getAllBlogs);
BlogRoutes.get("/get-one/:id", BlogController.getOneBlog);
BlogRoutes.delete("/remove/:id", checkPermission([PERMISSIONS.ADMIN]), BlogController.removeBlog);
BlogRoutes.get("/bookmark/:blogID", BlogController.bookmarkedBlogWithBlogID);
BlogRoutes.get("/like/:blogID", BlogController.likedBlog);
BlogRoutes.get("/dislike/:blogID", BlogController.dislikedBlog);
BlogRoutes.get("/search", BlogController.getBlogWithSearch);

module.exports = BlogRoutes;
