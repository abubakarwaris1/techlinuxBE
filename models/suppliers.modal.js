const Sequelize = require("sequelize");

module.exports = sequelize.define("suppliers", {
    _id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    },
    name: { type: Sequelize.STRING },
    email:Sequelize.STRING,
    phone:Sequelize.STRING,
    createdDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
});
