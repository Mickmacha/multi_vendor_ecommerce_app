const express = require('express');
const router = express.Router();

const productController = require('./productController');
const vendorController = require('./vendorController');

router.use('/products', productController);
router.use('/vendors', vendorController);

module.exports = router;