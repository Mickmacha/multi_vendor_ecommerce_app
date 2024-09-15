
const express = require('express');
const bcrypt = require('bcryptjs');
const Customer = require('../../models/customer');
const Vendor = require('../../models/vendor');

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
        // Log vendor object in console for debugging
        console.log('New Vendor Registered:');
        console.log(JSON.stringify(vendor.toObject(), null, 2));

        res.status(201).send('Vendor registered');
    } catch (err) {
        res.status(500).send('Server error while registering vendor');
    }
});

module.exports = router;
