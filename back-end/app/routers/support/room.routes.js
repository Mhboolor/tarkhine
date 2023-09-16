const RoomController = require("../../http/controllers/support/room.controller");
const checkPermission = require("../../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../utils/constans.utils");
const { uploadFile } = require("../../utils/multer.utils");

const router = require("express").Router();
router.post(
  "/add",verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  uploadFile.single("image"),
  RoomController.addRoom
);
router.get("/list",verifyAccessToken, checkPermission([PERMISSIONS.ADMIN]), RoomController.getListOfRooms);

const ApiRoomRoutes = router;
module.exports = ApiRoomRoutes;
