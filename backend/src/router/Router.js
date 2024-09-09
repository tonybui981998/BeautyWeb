const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const homeController = require("../homeController/homeController");
dotenv.config();
const router = express.Router();
const initRouter = (app) => {
  router.get("/getAllprodcut", homeController.handleAllProduct);
  app.use("/api", router);
};
module.exports = initRouter;
