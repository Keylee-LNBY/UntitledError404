const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactapp"
);

const scoreSeed = [
    {
        username: "User",
        score: [12, 15, 54],
        date: new Date(Date.now())
    },
    {
        username: "User",
        score: [13, 5, 60],
        date: new Date(Date.now())
    },

];
console.log(scoreSeed);

db.Score.remove({})
    .then(() => db.Score.collection.insertMany(scoreSeed))
    .then(data => {
        console.log(data.result.n + " scores inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });