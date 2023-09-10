const TicketController = require("../../http/controllers/ticket/ticket.conteroller");
const checkPermission = require("../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../utils/constans.utils");

const TicketRoutes = require("express").Router();

TicketRoutes.post("/add", TicketController.createTicket);
TicketRoutes.post("/set-answer",checkPermission([PERMISSIONS.ADMIN]), TicketController.setAnswer);
TicketRoutes.get("/list",checkPermission([PERMISSIONS.ADMIN]), TicketController.listOfTicket);
TicketRoutes.get("/get-answer/:id", TicketController.getAnswer);
TicketRoutes.get("/list-of-user", TicketController.userTickets);

module.exports = TicketRoutes;
