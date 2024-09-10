var express = require("express");
var app = express();
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var initRouter = require("../src/router/Router");
var checkConnection = require("../src/config/connectDatabase");
var path = require("path"); // Import module 'path'
dotenv.config();
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use((req, res, next) => {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*"; // Set to a specific domain or use '*' to allow all
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//console.log(path.join(__dirname, "image"));
const imageURL = path.join(__dirname, "image");
app.use("/images", express.static(imageURL));
const PORT = process.env.PORT || 8082;

initRouter(app);
checkConnection();

app.listen(PORT, () => {
  console.log(`app running on the port ${PORT}`);
});
