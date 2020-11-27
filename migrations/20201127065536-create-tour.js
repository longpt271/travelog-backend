'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      diadiemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Diadiems",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      gianguoilon: {
        type: Sequelize.INTEGER
      },
      giatreem: {
        type: Sequelize.INTEGER
      },
      giaembe: {
        type: Sequelize.INTEGER
      },
      trailer: {
        type: Sequelize.STRING
      },
      chitiettour: {
        type: Sequelize.STRING
      },
      luuy: {
        type: Sequelize.STRING
      },
      bando: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tours');
  }
};