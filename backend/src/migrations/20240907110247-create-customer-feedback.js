"use strict";
/** @type {import('sequelize-cli').Migration} */
//const Product = require("../models/product");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CustomerFeedbacks", {
      commentId: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      productID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "productID",
        },
        allowNull: false,
      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customerComments: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      rating: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
        allowNull: true,
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
    // Product.hasMany(CustomerFeedback, foreignKey("ProductId"));
    //CustomerFeedback.hasOne(Product, foreignKey("ProductId"));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CustomerFeedbacks");
  },
};
