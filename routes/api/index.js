const router = require("express").Router();
const db = require("../../models");

// router.get("/user", (req, res) => {
//   // Use a regular expression to search titles for req.query.q
//   // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.User.find({
//     title: { $regex: new RegExp(req.query.q, "i") },
//   })
//     .then((users) => res.json(users))
//     .catch((err) => res.status(422).end());
// });

const userRoutes = require("./users");

// Book routes
router.use("/users", userRoutes);

module.exports = router;
