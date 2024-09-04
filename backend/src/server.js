var express = require("express");
var app = express();
var dotenv = require("dotenv");
const PORT = process.env.PORT || 8082;
dotenv.config();
app.listen(PORT, () => {
  console.log(`app running on the port ${PORT}`);
});
