
const express = require('express');
const bcrypt = require('bcryptjs');
const Customer = require('./models/Customer');
const Vendor = require('./models/Vendor');

const router = express.Router();

// Register Customer
router.post('/register/customer', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let customer = await Customer.findOne({ email });
        if (customer) {
            return res.status(400).send('Customer already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        customer = new Customer({ name, email, password: hashedPassword });
        await customer.save();
        res.status(201).send('Customer registered');
    } catch (err) {
        res.status(500).send('Server error while registering customer');
    }
});

// Register Vendor
router.post('/register/vendor', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let vendor = await Vendor.findOne({ email });
        if (vendor) {
            return res.status(400).send('Vendor already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        vendor = new Vendor({ name, email, password: hashedPassword });
        await vendor.save();
        res.status(201).send('Vendor registered');
    } catch (err) {
        res.status(500).send('Server error while registering vendor');
    }
});

module.exports = router;
