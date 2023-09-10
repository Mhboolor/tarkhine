const ProfileController = require("../../http/controllers/user-profile/user-profile.controller");

const ProfileRoutes = require("express").Router();

ProfileRoutes.get("/bookmark-blog", ProfileController.getUserBookmarkedBlogs);
ProfileRoutes.get(
  "/bookmark-product",
  ProfileController.getUserBookmarkedProducts
);
ProfileRoutes.get(
  "/bookmark-course",
  ProfileController.getUserBookmarkedCourses
);
ProfileRoutes.get("/basket", ProfileController.getUserBasket);
ProfileRoutes.patch("/update-profile", ProfileController.updateUserProfile);

module.exports = ProfileRoutes;
