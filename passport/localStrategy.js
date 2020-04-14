const User = require("../models/userModel");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    email: "email" // not necessary, DEFAULT
  },
  function (email, password, done) {
    User.findOne({ username: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  }
);

module.exports = strategy;
