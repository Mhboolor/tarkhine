const AuthController = require("../../http/controllers/auth/auth.controller");
const checkPermission = require("../../http/middlewares/permission.guard");
const { verifyAccessToken } = require("../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../utils/constans.utils");

const AuthRoutes = require("express").Router();

AuthRoutes.post("/get-otp", AuthController.getOtp);
AuthRoutes.post("/check-otp", AuthController.checkOtp);
AuthRoutes.post("/register", AuthController.register);
AuthRoutes.post("/login", AuthController.login);
AuthRoutes.get(
  "/me",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  AuthController.getMe
);

module.exports = AuthRoutes;
