const Sequelize = require("sequelize");

// const sequelize = new Sequelize("ecommerce", "root", "Raza@7292", {
//   host: "127.0.0.1",
//   dialect: "mysql",
//   operatorsAliases: false,
//   define: {
//     timestamps: false,
//   },
// });

// const sequelize = new Sequelize("ecommerce", "hp", "password", {
//   host: "localhost",
//   dialect: "mysql",
//   operatorsAliases: false,
//   define: {
//     timestamps: false,
//   },
// });

//dev db
// const sequelize = new Sequelize("ecommerce", "admin", "dev_dmechs123", {
//   host: "dev-db.c9pvqeowlq8l.ap-south-1.rds.amazonaws.com",
//   dialect: "mysql",
//   operatorsAliases: false,
//   define: {
//     timestamps: false,
//   },
// });

//localhost
const sequelize = new Sequelize("techlinux_dev", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
});

//production db
// const sequelize = new Sequelize("ecommerce", "gabuser", "gabuser123", {
//   host: "gab.c9pvqeowlq8l.ap-south-1.rds.amazonaws.com",
//   dialect: "mysql",
//   operatorsAliases: false,
//   define: {
//     timestamps: false,
//   },
// });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
global.sequelize = sequelize;
