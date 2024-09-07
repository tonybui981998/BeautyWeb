"use strict";
/** @type {import('sequelize-cli').Migration} */
//const Product = require("../models/product");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductDetails", {
      detailId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "productID",
        },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    //   Product.hasOne(ProductDetails, foreignKey("productID"));
    // ProductDetails.belongsTo(Product, foreignKey("productID"));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ProductDetails");
  },
};
