const NamespaceController = require("../../http/controllers/support/namespace.controller");
const checkPermission = require("../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../utils/constans.utils");
const { verifyAccessToken } = require("../../http/middlewares/verifyAccessToken.middleware");

const router = require("express").Router();
router.post(
  "/add",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  NamespaceController.addNamespace
);
router.get(
  "/list",
  verifyAccessToken,
  checkPermission([PERMISSIONS.ADMIN]),
  NamespaceController.getListOfNamespaces
);

const ApiNamespaceRoutes = router;
module.exports = ApiNamespaceRoutes;
