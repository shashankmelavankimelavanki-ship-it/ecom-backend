const express = require("express");
const {
  createRazorpayOrder,
  verifyPayment,
} = require("../controllers/ordercontroller");

const { isAuth } = require("../middlewares/authmiddlewares");

const orderRouter = express.Router();

orderRouter.post("/create-razorpay-order", isAuth, createRazorpayOrder);

orderRouter.post("/verify-payment", isAuth, verifyPayment);

module.exports = orderRouter;
