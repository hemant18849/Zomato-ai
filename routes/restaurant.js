const express = require("express");
const router = express.Router();

const Restaurant = require("../models/restaurant.js");
const Review = require("../models/review.js")


// Middleware functions
const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }

    next();
};

const isOwner = async (req, res, next) => {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);

    if (!restaurant.owner || !restaurant.owner.equals(req.user._id)) {
        /* return res.send("You are not the owner of this restaurant!"); */
        req.flash("error", "You are not the owner of this restaurant!");
        return res.redirect(`/restaurants/${id}`);
    }

    next();
};

const isReviewAuthor = async (req, res, next) => {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review.author || !review.author.equals(req.user._id)) {
        /* return res.send("You are not the author of this review!"); */
        req.flash("error", "You are not authorized to delete this review!");
        return res.redirect(`/restaurants/${req.params.id}`);
    }
    next();
};

// INDEX ROUTE + SEARCH

router.get("/", async (req, res) => {

    let query = {};

    // Search value
    const search = req.query.search;

    if (search) {
        query = {
            $or: [
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    cuisine: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    location: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ]
        };
    }

    const allRestaurants = await Restaurant.find(query);
    res.render("restaurants/index.ejs", {
        allRestaurants,
        search
    });

});


// NEW - Form

router.get("/new", isLoggedIn, (req, res) => {
    res.render("restaurants/new.ejs");
});


// CREATE

router.post("/", isLoggedIn, async (req, res) => {

    const newRestaurant = new Restaurant(req.body.restaurant);

    // Logged-in user ko restaurant ka owner banao
    newRestaurant.owner = req.user._id;

    await newRestaurant.save();
    req.flash("success", "Restaurant Added Successfully!");
    res.redirect("/restaurants");
});


// SHOW - Single Restaurant

router.get("/:id", isLoggedIn, async (req, res) => {

    const restaurant = await Restaurant
        .findById(req.params.id)
        .populate("reviews");

    res.render("restaurants/show.ejs", {
        restaurant,
    });

});


// EDIT - Form

router.get("/:id/edit", isLoggedIn,isOwner, async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    res.render("restaurants/edit.ejs", {
        restaurant,
    });
});


// UPDATE

router.put("/:id", isLoggedIn,isOwner, async (req, res) => {
    await Restaurant.findByIdAndUpdate(
        req.params.id,
        req.body.restaurant,
        { runValidators: true }
    );
    req.flash("success", "Restaurant Updated Successfully!");
    res.redirect(`/restaurants/${req.params.id}`);
});


// DELETE

router.delete("/:id", isLoggedIn,isOwner, async (req, res) => {
    await Restaurant.findByIdAndDelete(req.params.id);
    req.flash("success", "Restaurant Deleted Successfully!");
    res.redirect("/restaurants");
});


// =================================
// CREATE REVIEW
// POST /restaurants/:id/reviews
// =================================

router.post("/:id/reviews", isLoggedIn, async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    const newReview = new Review(req.body.review);

    // Logged-in user ko review ka author banao
    newReview.author = req.user._id;
    restaurant.reviews.push(newReview);
    await newReview.save();
    await restaurant.save();
    req.flash("success", "Review Added Successfully!");
    res.redirect(`/restaurants/${restaurant._id}`);
});

// ==============================
// DELETE REVIEW
// DELETE /restaurants/:id/reviews/:reviewId
// ==============================

router.delete("/:id/reviews/:reviewId", isLoggedIn, isReviewAuthor, async (req, res) => {
        const { id, reviewId } = req.params;
        await Restaurant.findByIdAndUpdate( id,
            {
                $pull: {
                    reviews: reviewId,
                },
            }
        );
        await Review.findByIdAndDelete(reviewId);
        req.flash("success", "Review Deleted Successfully!");
        res.redirect(`/restaurants/${id}`);
    }
);


module.exports = router;