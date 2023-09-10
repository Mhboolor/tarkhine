const { uploadVideo } = require("../../../utils/multer.utils");
const EpisodeController = require("../../../http/controllers/course/episode.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const EpisodeRoutes = require("express").Router();
EpisodeRoutes.post(
  "/add",
  checkPermission([PERMISSIONS.ADMIN]),
  uploadVideo.single("video"),
  EpisodeController.addNewEpisode
);
EpisodeRoutes.patch(
  "/remove/:episodeID",
  checkPermission([PERMISSIONS.ADMIN]),
  EpisodeController.removeEpisode
);
module.exports = EpisodeRoutes;
