const RoomController = require("../../http/controllers/support/room.controller");
const { uploadFile } = require("../../utils/multer.utils");

const router = require("express").Router();
router.post("/add", uploadFile.single("image"), RoomController.addRoom);
router.get("/list", RoomController.getListOfRooms);

const ApiRoomRoutes = router;
module.exports = ApiRoomRoutes;
