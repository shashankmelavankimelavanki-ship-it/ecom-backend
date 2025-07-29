const express = require("express");
const {
  removeFromCart,
  updateQuantity,
  addToCart,
  clearCart,
  getcart,
} = require("../controllers/cartcontroller");
const { isAuth } = require("../middlewares/authmiddlewares");
const cart = require("../models/Cart");

const cartRoutes = express.Router();

cartRoutes.get("/cart", isAuth, getcart);

cartRoutes.post("/cart/add", isAuth, addToCart);

cartRoutes.put("/cart", isAuth, updateQuantity);

cartRoutes.delete("/cart/product", isAuth, removeFromCart);

cartRoutes.delete("/cart", isAuth, clearCart);

module.exports = cartRoutes;
