const express = require("express");
const passport = require("passport");

const router = express.Router();

// here i define the login routes
router.post("/login/vendor", (req, res, next) => {
    console.log('Login attempt for vendor:', req.body);
    passport.authenticate("vendor-local", (err, vendor, info) => {
        if (err) {
            console.error('Error during authentication:', err);
            return next(err);
        }
        
        console.log('Vendor object:', vendor);
        if (!vendor){
            console.log('Authentication failed:', info);
            return res.status(400).send([vendor, "cannot log in", info]);
        }
        req.login(vendor, (err) => {
            if (err) {
                console.error('Error during login:', err);
                return next(err);
            }
            console.log('Vendor logged in successfully:', vendor.email);

            res.status(200).json({ user: { id: vendor.id, email: vendor.email, name: vendor.name, type: 'Vendor' } });
        });
    })(req, res, next);
});

router.post("/login/customer", (req, res, next) => {
    passport.authenticate("local", (err, customer, info) => {
        if(err){
            return next(err);

        }
        if(!customer){
            return res.status(400).send([customer, "cannot log in", info]);
        }
        req.login(customer, (err) =>{
            if(err){
                return next(err);
            }
            res.status(200).send("Customer logged in");
            res.status(200).json({ user: { id: customer.id, email: customer.email, name: customer.name, type: 'Customer' } });
        });
    });

});

module.exports = router;