

module.exports = async () => {
    //Require models
    const FleetOwnersModel = require("./fleetOwners.modal");
    const SuppliersModel = require("./suppliers.modal");
    const VehiclesModel = require("./vehicle.model");
    const DriversModel = require("./drivers.model");



    FleetOwnersModel.belongsToMany(SuppliersModel, {
        through: "supplierOwners",
        foreignKey: "ownerId",
        otherKey: "supplierId",
    });
    SuppliersModel.belongsToMany(FleetOwnersModel, {
        through: "supplierOwners",
        foreignKey: "supplierId",
        otherKey: "ownerId",
    });
    VehiclesModel.hasMany(DriversModel,{
        foreignKey:'vehicleId',
        as:'Drivers'
    })
    DriversModel.belongsTo(VehiclesModel,{
        foreignKey:'vehicleId',
        as:'vehicle'
    })

};
