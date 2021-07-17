const express = require('express');
const router = express.Router();
const fleetOwnerController = require('../controllers/fleetOwners.controller');


router.post("/",fleetOwnerController.create);
router.post("/registerWithSuppliers/:id",fleetOwnerController.registerWithSuppliers);

module.exports = router;