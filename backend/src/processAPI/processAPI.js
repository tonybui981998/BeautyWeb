const { Model } = require("sequelize");

const getAllProductDB = async () => {
  try {
    let allProcuts = await Product.findAll({
      include: [
        {
          model: ProductImage,

          attributes: ["ProductId", "ImageUrl"],
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
