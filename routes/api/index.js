const router = require("express").Router();
const db = require("../../models");

const scoreRoutes = require(".highscore");
const userRoutes = require("./userAuth"); //use file userAuth when using userRoutes

// High Score routes, now we're at /api/high score
// router.use("/highscore", highScoreRoutes);

// user routes
router.use("/users", userRoutes);
router.use("/score", scoreRoutes);

module.exports = router;

// router.get("/user", (req, res) => {
//   // Use a regular expression to search titles for req.query.q
//   // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.User.find({
//     title: { $regex: new RegExp(req.query.q, "i") },
//   })
//     .then((users) => res.json(users))
//     .catch((err) => res.status(422).end());
// });

