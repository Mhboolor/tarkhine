const CourseController = require("../../../http/controllers/course/course.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const stringToArray = require("../../../http/middlewares/stringToArray");
const { PERMISSIONS } = require("../../../utils/constans.utils");
const { uploadFile } = require("../../../utils/multer.utils");

const CourseRoutes = require("express").Router();
CourseRoutes.post(
  "/add",checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.array("images", 10),
  stringToArray("tags"),
  CourseController.addCourse
);
CourseRoutes.post("/user-register-course/:courseID", CourseController.userRegisterCourse);
CourseRoutes.get("/list", CourseController.getListOfCourse); //get all course
CourseRoutes.delete("/remove/:id",checkPermission([PERMISSIONS.ADMIN]), CourseController.removeCourse); //remove course
CourseRoutes.get("/:title", CourseController.getOne); //get all course
CourseRoutes.patch("/update/:id",checkPermission([PERMISSIONS.ADMIN]), uploadFile.array("image", 10), CourseController.updateCourseById); // edit a course
CourseRoutes.get("/bookmark/:courseID", CourseController.bookmarkedCourseWithCourseID);
CourseRoutes.get("/like/:courseID", CourseController.likedCourse);
CourseRoutes.get("/dislike/:courseID", CourseController.dislikedCourse);
module.exports = CourseRoutes;
