const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    description: {
        type: String
    },

    cuisine: {
        type: String
    },

    price: {
        type: Number
    },

    rating: {
        type: Number,
        min: 0,
        max: 5
    },

    location: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    // REVIEWS
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;