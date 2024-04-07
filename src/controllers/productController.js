const Product = require('../models/product');

//get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category vendor reviews");
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// a function to get product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//function for creating a product
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//function for updating a product
exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    const updateData = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });
        if (!updatedProduct) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//function for deleting a product
exports.deleteProduct = async (req, res) => {
    const productId =req.params.id;
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};