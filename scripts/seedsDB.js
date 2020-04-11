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
          username: "coolJenn",
          password: "password2",
          email: "jenn@email.com",
          userCreated: new Date(Date.now())
      },
      {
        firstName: "James",
          lastName: "Dean",
          username: "coolGuy",
          password: "password3",
          email: "james@email.com",
          userCreated: new Date(Date.now())
      }
  ];

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