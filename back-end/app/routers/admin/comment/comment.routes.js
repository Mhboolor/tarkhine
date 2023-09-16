const CommentController = require("../../../http/controllers/comment/comment.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const commentRoutes = require("express").Router();
commentRoutes.post("/add-comment-product", CommentController.createCommentForProduct);
commentRoutes.get("/list", CommentController.getAllComments);
commentRoutes.patch("/show/:id",checkPermission([PERMISSIONS.ADMIN]), CommentController.showComment);
commentRoutes.patch("/answer/:id", CommentController.createAnswer);
commentRoutes.delete("/remove/:id",checkPermission([PERMISSIONS.ADMIN]), CommentController.removeComment);

module.exports = commentRoutes;
