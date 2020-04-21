const db = require("../models");

// Defining methods for the scoreController
module.exports = {
  findAll: function (req, res) {
    db.Score.find({})
      .sort({ date: -1 })
      .then(score => {
        console.log("scores", score);
        return res.json(score)
      })
      .catch(err => {
        console.log("err", err);
        return res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    console.log("req.user", req.user);
    db.Score.findById(req.user._id)
      .then(scores => {
        return res.json(scores)
        console.log("scores", scores);
      })
      .catch(err => res.status(422).json(err));
  },
  // works, don't touch!!
  create: function (req, res) {
    var scoreObj = {
      userId: req.user._id,
      score: req.body.score,
      username: req.user.username,
    }
    db.Score.create(scoreObj)
      .then(scores => res.json(scores))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.Score.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(scores => res.json(scores))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Score.findById({ _id: req.params.id })
      .then(scores => scores.remove())
      .then(scores => res.json(scores))
      .catch(err => res.status(422).json(err));
  }
};