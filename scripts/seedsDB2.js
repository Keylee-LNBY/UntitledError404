const mongoose = require("mongoose");
const db = require("../models");

const scoreSeed = [
    {
        user: "User",
        score: [12, 15, 54],
        date: new Date(Date.now())
    },
    {
        user: "User",
        score: [13, 5, 60],
        date: new Date(Date.now())
    },

];

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