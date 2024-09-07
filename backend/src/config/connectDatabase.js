const Sequelize = require("Sequelize");
const sequelize = new Sequelize(
  process.env.DATABSE,
  process.env.NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
  }
);

const checkConnection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};
module.exports = checkConnection;
