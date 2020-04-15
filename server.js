require("dotenv").config();
const express = require("express");
// const urlencoded = require("body-parser")
// json  from "body-parser";
// import cookieParser from "cookie-parser";
const passport = require("passport");
const router = require("./routes");
// const initialiseAuthentication = require("./router/auth.routes");
// const connectToDatabase = require("./models/connection");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const User = require("./models/userModel.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactapp"
);

// app.prepare().then(async () => {

//   // Code omitted for brevity

//   app.get("*", (req, res) => {
//     return handle(req, res)
//   })

//   await connectToDatabase();
// });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());

app.use(passport.initialize());

// router(app);
// initialiseAuthentication(app);

//post to DB
// app.post("/submit", ({body}, res) => {
//   const user = new User(body);
//   user.setFullName();
//   user.lastUpdatedDate();

//   User.create(user)
//     .then(dbUser => {
//       res.json(dbUser);

//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/user", (req, res) => {
//   db.User.find({})
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
