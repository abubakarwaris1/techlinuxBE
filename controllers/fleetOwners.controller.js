const FleetOwnerModel = require("../models/fleetOwners.modal");
const defaultResponse = require("../utils/defaultResponse");
const constants = require("../utils/constants");
const errorCode = require("../utils/errorCodes");
exports.create=async (req,res)=>{

    try{
        let fleetOwner = await FleetOwnerModel.create(req.body);
        defaultResponse().success(
            constants.DATA_SAVED,
            fleetOwner,
            res,
            errorCode.SUCCESS
        );
    }catch (e) {
        defaultResponse().error(
            { message: e.message },
            res,
            errorCode.ERROR
        );
    }

}
exports.registerWithSuppliers =async (req,res)=>{
    try {
        console.log('in register================',req.params.id);
        debugger;
        let owner = await FleetOwnerModel.findOne({where:{_id:req.params.id}});
        debugger;
        owner.setSuppliers(req.body.supplier);
        debugger;
        console.log('Registered ================')

        defaultResponse().success(
            constants.DATA_SAVED,
            {},
            res,
            errorCode.SUCCESS
        );
    }catch (e) {
        debugger;
        defaultResponse().error(
            { message: e.message },
            res,
            errorCode.ERROR
        );
    }
}