const SuppliersModel = require("../models/suppliers.modal");
const defaultResponse = require("../utils/defaultResponse");
const constants = require("../utils/constants");
const errorCode = require("../utils/errorCodes");
exports.create=async (req,res)=>{
    try{
        let supplier = await SuppliersModel.create(req.body);
        defaultResponse().success(
            constants.DATA_SAVED,
            supplier,
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