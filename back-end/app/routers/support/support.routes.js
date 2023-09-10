const SupportController = require("../../http/controllers/support/support.controller");
const { checkAccessLogin, checkLogin } = require("../../http/middlewares/auth");

const ApiNamespaceRoutes = require("./namespace.routes");
const ApiRoomRoutes = require("./room.routes");

const router = require("express").Router();

router.use("/namespace", ApiNamespaceRoutes);
router.use("/room", ApiRoomRoutes);
router.get("/login", checkAccessLogin, SupportController.loginForm);
router.post("/login", checkAccessLogin, SupportController.login);
router.get("/", checkLogin, SupportController.renderChatRoom);

const supportSectionRoutes = router;
module.exports = supportSectionRoutes;
