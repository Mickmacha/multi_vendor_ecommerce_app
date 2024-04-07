const Cart = require('../models/cart');

// Get all carts
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('customer').populate('items.product').populate('items.vendor');
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single cart by ID
exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate('customer').populate('items.product').populate('items.vendor');
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new cart
exports.createCart = async (req, res) => {
  const cartData = req.body;
  try {
    const newCart = await Cart.create(cartData);
    res.status(201).json(newCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a cart
exports.updateCart = async (req, res) => {
  const cartId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedCart = await Cart.findByIdAndUpdate(cartId, updatedData, { new: true });
    if (!updatedCart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a cart
exports.deleteCart = async (req, res) => {
  const cartId = req.params.id;
  try {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    if (!deletedCart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.status(200).json({ message: 'Cart deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};