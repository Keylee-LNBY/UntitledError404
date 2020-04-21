const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const User = require("../models");

const ScoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  username: {
    type: Schema.Types.String,
    ref: "User"
  },
  score: Number,
  date: { type: Date, default: Date.now },
});

// "highscores " is referencing the highscores table in the db
const Score = mongoose.model("highscore", ScoreSchema, "highscore");

module.exports = Score;