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
        foreignKey: "productID",
      });
      // define association here
    }
  }
  CustomerFeedback.init(
    {
      commentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      productID: DataTypes.INTEGER,
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
