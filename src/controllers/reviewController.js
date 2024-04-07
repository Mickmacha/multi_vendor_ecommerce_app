const Review = require('../models/review');

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('product').populate('customer');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single review by ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('product').populate('customer');
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  const reviewData = req.body;
  try {
    const newReview = await Review.create(reviewData);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a review
exports.updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedReview = await Review.findByIdAndUpdate(reviewId, updatedData, { new: true });
    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json(updatedReview);
    }
    catch (err) {
    res.status(400).json({ error: err.message });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
