var express = require("express");
var app = express();
var dotenv = require("dotenv");
var initRouter = require("../src/router/Router");
var conection = require("../src/config/connectDatabase");
const PORT = process.env.PORT || 8082;
dotenv.config();
initRouter(app);
conection();
app.listen(PORT, () => {
  console.log(`app running on the port ${PORT}`);
});
