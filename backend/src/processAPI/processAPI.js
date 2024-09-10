var db = require("../models/index");
const { request } = require("http");
const { Model } = require("sequelize");

const getAllProductDB = async () => {
  try {
    let allProcuts = await db.Product.findAll({
      include: [
        {
          model: db.ProductImage,
          attribute: ["productID", "imageUrl"],
        },
      ],
    });

    return {
      DM: "Success",
      DC: 0,
      DT: allProcuts,
    };
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};
module.exports = {
  getAllProductDB,
};
