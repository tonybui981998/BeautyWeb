"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.ProductImage.belongsTo(models.Product, {
        foreignKey: "ProductId",
      });
      // define association here
    }
  }
  ProductImage.init(
    {
      imageID: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      ImageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductImage",
    }
  );
  return ProductImage;
};
