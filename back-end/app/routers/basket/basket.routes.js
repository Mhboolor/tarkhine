const BasketController = require("../../http/controllers/basket/basket.controller");

const BasketRoutes = require("express").Router();

BasketRoutes.patch("/add-product/:productID", BasketController.addProductInBasket);
BasketRoutes.patch("/remove-product/:productID", BasketController.removeProductFromBasket);
BasketRoutes.patch("/remove-all-product", BasketController.removeAllProductFromBasket);
BasketRoutes.patch("/add-course/:courseID", BasketController.addCourseInBasket);
BasketRoutes.patch("/remove-course/:courseID", BasketController.removeCourseFromBasket);

module.exports = BasketRoutes;
