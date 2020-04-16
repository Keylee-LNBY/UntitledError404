const router = require("express").Router();
const db = require("../../models");

const scoreRoutes = require("./highscore");
const userRoutes = require("./userAuth"); //use file userAuth when using userRoutes

// High Score routes, now we're at /api/high score
// router.use("/highscore", highScoreRoutes);

// user routes
router.use("/users", userRoutes);
router.use("/score", scoreRoutes);

module.exports = router;


