const Customer = require("../models/customer");

//funstion to get all  customers
exports.getCustomers = async(req,res) => {
    try {
        const customers = await Customer.find().populate("orders cart");
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
};

//function to get customer by ID
exports.getCustomerById = async(req,res) => {
    const customerId = req.params.id;
    try {
        const customer = await Customer.findById(customerId).populate("orders cart");
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//function to create a customer
exports.createCustomer = async(req,res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//function to update a customer
exports.updateCustomer = async(req,res) => {
    const customerId = req.params.id;
    const updateData = req.body;
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(customerId, updateData, {new: true});
        if (!updatedCustomer) {
            res.status(404).json({message: "Customer not found"});
        }
        res.status(200).json(updatedCustomer);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
};

//function to delete a customer
exports.deleteCustomer = async(req,res) => {
    const customerId = req.params.id;
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(customerId);
        if (!deletedCustomer) {
            res.status(404).json({message: "Customer not found"});
        }
        res.status(200).json({message: "Customer deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};