const Sequelize = require("sequelize");

module.exports = sequelize.define("supplierOwners", {
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
