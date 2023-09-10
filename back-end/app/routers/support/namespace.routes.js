const NamespaceController = require("../../http/controllers/support/namespace.controller");

const router = require("express").Router();
router.post("/add", NamespaceController.addNamespace);
router.get("/list", NamespaceController.getListOfNamespaces);

const ApiNamespaceRoutes = router;
module.exports = ApiNamespaceRoutes;
