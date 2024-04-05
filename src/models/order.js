const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    items:
        [{
            products: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
            vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true }

        }],
    total: { type: Number, required: true },
    status: { type: String, required: true }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;