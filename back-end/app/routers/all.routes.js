const { verifyAccessToken } = require("../http/middlewares/verifyAccessToken.middleware");
const MainAdminRoutes = require("./admin/main.admin.routes");
const AuthRoutes = require("./auth/auth.routes");
const BasketRoutes = require("./basket/basket.routes");
const ContactRoutes = require("./contact/contact.routes");
const HomeRoutes = require("./home/home.routes");
const MenuRoutes = require("./menu/menu.routes");
const supportSectionRoutes = require("./support/support.routes");
const TicketRoutes = require("./ticket/ticket.routes");
const ProfileRoutes = require("./user-profile/user-profile.routes");

const AllRoutes = require("express").Router();

AllRoutes.use("/", HomeRoutes);
AllRoutes.use("/auth", AuthRoutes);
AllRoutes.use("/admin", MainAdminRoutes);
AllRoutes.use("/profile", verifyAccessToken, ProfileRoutes);
AllRoutes.use("/basket", verifyAccessToken, BasketRoutes);
AllRoutes.use("/contact", verifyAccessToken, ContactRoutes);
AllRoutes.use("/ticket", verifyAccessToken, TicketRoutes);
AllRoutes.use("/menu", MenuRoutes);
AllRoutes.use("/support", supportSectionRoutes);

module.exports = AllRoutes;
