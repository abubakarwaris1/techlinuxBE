const Sequelize = require("sequelize");

module.exports = sequelize.define("vehicles", {
    _id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    },
    make:{
        type:Sequelize.INTEGER,
    },
    year:{
        type:Sequelize.INTEGER,
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
    isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
    },
});
