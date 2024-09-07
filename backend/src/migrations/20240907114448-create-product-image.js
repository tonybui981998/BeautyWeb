"use strict";
/** @type {import('sequelize-cli').Migration} */
//const Product = require("../models/product");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductImages", {
      ImageID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "ProductId",
        },
        allowNull: false,
      },
      ImageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
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
    // Product.hasMany(ProductImage, foreignKey("ProductId"));
    // ProductImage.hasOne(Product, foreignKey("ProductId"));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ProductImages");
  },
};
