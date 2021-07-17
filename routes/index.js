const router = require("express").Router();

function routes() {
  const suppliers = require("./suppliers.routes");
  const fleetOwners = require("./fleetOwners.routes");

  //Seeding will be used to create an Admin user.
  router.use("/suppliers", suppliers);
  router.use("/fleetOwners", fleetOwners);

  return router;
}

module.exports = routes();
