const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({

    comment: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },

    // Review kis user ne likha
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;