const ChapterController = require("../../../http/controllers/course/chapter.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const ChapterRoutes = require("express").Router();
ChapterRoutes.put("/add",checkPermission([PERMISSIONS.ADMIN]), ChapterController.addChapter); //create new chapter
ChapterRoutes.get("/list/:courseID", ChapterController.chaptersOfCourse); //create new chapter
ChapterRoutes.patch("/remove/:chapterID",checkPermission([PERMISSIONS.ADMIN]), ChapterController.removeChapterById); //create new chapter
ChapterRoutes.patch("/update/:chapterID",checkPermission([PERMISSIONS.ADMIN]), ChapterController.updateChapterById); //create new chapter
module.exports = ChapterRoutes;
