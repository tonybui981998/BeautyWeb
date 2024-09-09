"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomerFeedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.CustomerFeedback.belongsTo(models.Product, {
        foreignKey: "ProductId",
      });
      // define association here
    }
  }
  CustomerFeedback.init(
    {
      commentId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      customerName: DataTypes.STRING,
      customerComments: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CustomerFeedback",
    }
  );
  return CustomerFeedback;
};
