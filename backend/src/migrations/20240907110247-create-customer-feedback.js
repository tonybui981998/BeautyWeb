"use strict";
/** @type {import('sequelize-cli').Migration} */
//const Product = require("../models/product");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CustomerFeedbacks", {
      CommentId: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "ProductId",
        },
        allowNull: false,
      },
      CustomerComments: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      Rating: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
        allowNull: true,
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
    // Product.hasMany(CustomerFeedback, foreignKey("ProductId"));
    //CustomerFeedback.hasOne(Product, foreignKey("ProductId"));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CustomerFeedbacks");
  },
};
