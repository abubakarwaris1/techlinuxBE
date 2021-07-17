const Sequelize = require("sequelize");

module.exports = sequelize.define("drivers", {
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
