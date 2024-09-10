const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]

    }
);

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;