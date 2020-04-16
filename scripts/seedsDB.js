const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactapp"
);

const userSeed = [
  {
    firstName: "Jennifer",
    lastName: "Coolige",
    password: "password2",
    email: "jenn@email.com",
    userCreated: new Date(Date.now())
  },
  {
    firstName: "James",
    lastName: "Dean",
    password: "password3",
    email: "james@email.com",
    userCreated: new Date(Date.now())
  }
];
console.log(userSeed);

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// const scoreSeed = [
//   {
//     user: "User",
//     score: [12, 15, 54],
//     date: new Date(Date.now())
//   },
//   {
//     user: "User",
//     score: [13, 5, 60],
//     date: new Date(Date.now())
//   },

// ];

// db.Score.remove({})
//   .then(() => db.Score.collection.insertMany(scoreSeed))
//   .then(data => {
//     console.log(data.result.n + " scores inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });