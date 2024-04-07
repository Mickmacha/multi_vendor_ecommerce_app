const Category = require('../models/category');

//get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate("products");
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// a function to get category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products");
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//function for creating a category
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//function for updating a category
exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const updateData = req.body;
    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updateData, {new: true});
        if (!updatedCategory) {
            res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(updatedCategory);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//function for deleting a category
exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};