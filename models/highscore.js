const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  score: [Number],
  date: { type: Date, default: Date.now },
});


const Score = mongoose.model("Score", ScoreSchema, "Score");

module.exports = Score;