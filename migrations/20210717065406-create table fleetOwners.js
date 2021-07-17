'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("fleetOwners", {
      _id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name:Sequelize.STRING,
      email:Sequelize.STRING,
      phone:Sequelize.STRING,
      createdDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("fleetOwners");
  }
};
