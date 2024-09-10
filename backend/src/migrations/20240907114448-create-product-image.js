"use strict";
/** @type {import('sequelize-cli').Migration} */
//const Product = require("../models/product");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductImages", {
      imageID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      productID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "productID",
        },
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
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
