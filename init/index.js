const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/zomatoai";

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Restaurant.deleteMany({});
    
    await Restaurant.insertMany(initData.data);

    console.log("Data initialized");
};

initDB();