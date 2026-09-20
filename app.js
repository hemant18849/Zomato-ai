require("dotenv").config();
const dns =require("dns");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


//passport and session setup
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const flash = require("connect-flash");

const app = express();
const restaurantRoutes = require("./routes/restaurant.js");

dns.setServers(["1.1.1.1","8.8.8.8"]);



const MONGO_URL = process.env.MONGO_URL;


// MongoDB Connection

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to MongoDB atlas");
    })
    .catch((err) => {
        console.log("mongodb connection error",err);
    });




//EJS setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// Session setup
const sessionOptions = {
    secret: "mySuperSecretCode",
    resave: false,
    saveUninitialized: true,
};


app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Routes
app.use("/restaurants", restaurantRoutes);


// Home Route
app.get("/", (req, res) => {
    res.redirect("/restaurants");
});


// ===========================
// SIGNUP PAGE
// ===========================

app.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});


// ===========================
// CREATE USER
// ===========================
app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({
            username: username,
        });
        const registeredUser = await User.register(
            newUser,
            password
        );
        console.log(registeredUser);
        res.redirect("/restaurants");
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }

});


// ===========================
// LOGIN PAGE
// ===========================

app.get("/login", (req, res) => {
    res.render("users/login.ejs");
});


// ===========================
// LOGIN USER
// ===========================

app.post( "/login", passport.authenticate("local", { failureRedirect: "/login",}),
    (req, res) => {
        res.redirect("/restaurants");
    }
);

// ===========================
// LOGOUT USER
// ===========================

app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/restaurants");
    });
});


// 404 error page not found
app.use( (req, res) => {
    res.status(404).render("error.ejs");
});

// Server
app.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening on port " + (process.env.PORT || 8080));
});
