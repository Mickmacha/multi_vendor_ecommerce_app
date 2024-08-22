const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Vendor = require('../models/vendor');
const Customer = require('../models/customer');

const authUser = async (username, password, done) => {
    // Normally you would check the username and password here
    // For now, we're just returning a dummy user
    const authenticated_user = { id: 123, name: "Kyle" };
    return done(null, authenticated_user);
};

passport.use(new LocalStrategy(authUser));
 // Customer Strategy
 passport.use('customer-local', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const customer = await Customer.findOne({ email });
        if (!customer) {
            return done(null, false, { message: 'No user with that email' });
        }

        const isMatch = await bcrypt.compare(password, customer.password);
        if (isMatch) {
            return done(null, customer);
        } else {
            return done(null, false, { message: 'Password incorrect' });
        }
    } catch (error) {
        return done(error);
    }
}));

passport.use('vendor-local', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const vendor = await Vendor.findOne({ email });
        if (!vendor) {
            return done(null, false, { message: 'No User has that email addresss'});
        }
        const isMatch = await bcrypt.compare(password, vendor.password);
        if(isMatch) {
            return done(null, vendor);

        } else{
            return done(null, false, {message: 'Incorrect Password '});
        }
    } catch (error) {
        return done(error);
    }
    }));


// Serialize and deserialize user
passport.serializeUser((userObj, done) => {
    done(null, userObj.id); // Typically you store user ID in session
});

passport.deserializeUser(async (id, done) => {
    // Fetch user from database based on the ID
    // Here we're returning a dummy user
    const authenticated_user = { id: 123, name: "Kyle" };
    done(null, authenticated_user);
});

module.exports = passport;
