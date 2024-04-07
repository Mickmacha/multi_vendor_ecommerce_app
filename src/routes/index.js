const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const vendorController = require('../controllers/vendorController');

router.use('/products', productController);
router.use('/vendors', vendorController);

module.exports = router;