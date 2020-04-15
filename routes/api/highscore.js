const router = require("express").Router();
const scoresController = require("../../controllers/scoreController");

//matches with "/api/highscore" or is it "/api/score"?
router
    .route("/")
    .get(scoresController.findAll)
    .post(scoresController.create)
    .put(scoresController.update);

router
    .route("/:id")
    .get(scoresController.findById)
    .put(scoresController.update)
    .delete(scoresController.remove);

module.exports = router;