const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;