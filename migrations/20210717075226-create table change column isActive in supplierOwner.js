'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("supplierOwners", "isActive", {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue:true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("supplierOwners", "isActive", {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue:null
    });
  }
};
