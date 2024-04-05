const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema(
    {
        name: { type: String, required: True },
        email: { type: String, required: True },
        password: { type: String, required: True },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]

    }
);

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;