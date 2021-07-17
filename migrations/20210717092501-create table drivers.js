'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("drivers", {
      _id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name:Sequelize.STRING,
      email:Sequelize.STRING,
      phone:Sequelize.STRING,
      vehicleId:{
        type:Sequelize.INTEGER,
        references: {
          model: {
            tableName: "vehicles",
          },
          key: "_id",
        },
        allowNull: false,
      },
      isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("vehicles");
  }
};
