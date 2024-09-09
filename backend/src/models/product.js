"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Product.hasMany(models.CustomerFeedback, {
        foreignKey: "productId",
      });
      models.Product.hasMany(models.ProductImage, {
        foreignKey: "productId",
      });
    }
  }
  Product.init(
    {
      productID: DataTypes.INTEGER,
      productName: DataTypes.STRING,
      price: DataTypes.INTEGER,
      category: DataTypes.STRING,
      productCode: DataTypes.STRING,
      description: DataTypes.TEXT,
      allInformation: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
