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
        foreignKey: "productID",
      });
      // define association here
    }
  }
  ProductImage.init(
    {
      imageID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productID: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductImage",
    }
  );
  return ProductImage;
};
