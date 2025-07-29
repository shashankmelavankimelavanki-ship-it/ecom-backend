const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cart = require("./models/Cart");
const cartRoutes = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRouter");
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json({
    message: "severis running",
  });
});

app.use("/", productRoutes);

app.use("/", cartRoutes);

app.use("/auth", authRoutes);
app.use("/orders", orderRouter);

mongoose

  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("server is running in port 3000");
    });
  })
  .catch((error) => {
    console.log("Error conntecting to database");
  });
