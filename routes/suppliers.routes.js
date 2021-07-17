const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliers.controller');


router.post("/",suppliersController.create);

module.exports = router;