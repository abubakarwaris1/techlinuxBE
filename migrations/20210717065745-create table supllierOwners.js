'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("supplierOwners", {
      supplierId:{
        type:Sequelize.INTEGER,
        references: {
          model: {
            tableName: "suppliers",
          },
          key: "_id",
        },
        allowNull: false,
      },
      ownerId:{
        type:Sequelize.INTEGER,
        references: {
          model: {
            tableName: "fleetOwners",
          },
          key: "_id",
        },
        allowNull: false,
      },
      isActive:Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("supplierOwners");
  }
};
