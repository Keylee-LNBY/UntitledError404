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
    username: "jenn@username.com",
    userCreated: new Date(Date.now())
  },
  {
    firstName: "James",
    lastName: "Dean",
    password: "password3",
    username: "james@username.com",
    userCreated: new Date(Date.now())
  },
  {
    _id: "5e9b58236bc8fb181c1eab3f",
    firstName: "kelly",
    lastName: "l",
    password: "$2b$10$mwAVk9Lbu8.IRjY/o66nNOq/MqwXGHY3soU9d9ZjYL6J.8sWs02iq",
    username: "kelly2@gmail.com",
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

const scoreSeed = [
  {
    username: "5e9b58236bc8fb181c1eab3f",
    score: 12,
    date: new Date(Date.now())
  },
  {
    username: { _id: "5e9b3a74233b3f4cc8a1278d", username: 'kel@gmail.com' },
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