const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
    rating: {type: Number, required: true},
    comment: {type: String}
}
);
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
