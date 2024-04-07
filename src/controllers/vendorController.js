const Vendor = require("../models/vendor");

//get all vendors
exports.getVendors = async(req, res) => {
    try {
        const vendors = await Vendor.find().populate("products");
        res.status(200).json(vendors);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

// a function to get vendor by ID
exports.getVendorById = async(req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id).populate("products");
        res.status(200).json(vendor);
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
};

//function for creating a vendor
exports.createVendor = async(req, res) => {
    try{
        const vendor = await Vendor.create(req.body);
        res.status(201).json(vendor);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
};

//function for updating a vendor
exports.updateVendor = async(req,res) => {
    const vendorId = req.params.id;
    const updateData = req.body;
    try {
        const updatedVendor = await Vendor.findByIdAndUpdate(vendorId, updateData, {new: true});
        if (!updateVendor) {
            res.status(404).json({message: "Vendor not found"});
        }
        res.status(200).json(updatedVendor);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
};

//function for deleting a vendor
exports.deleteVendor = async(req, res) => {
    const vendorId = req.params.id;
    try {
        const deletedVendor = await Vendor.findByIdAndDelete(vendorId);
        if (!deletedVendor) {
            res.status(404).json({message: "Vendor not found"});
        }
        res.status(200).json({message: "Vendor deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

