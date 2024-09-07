"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.ProductDetails.belongsTo(models.Product, {
        foreignKey: "productId",
      });
    }
  }
  ProductDetails.init(
    {
      detailId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      detailedInfo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ProductDetails",
    }
  );
  return ProductDetails;
};
