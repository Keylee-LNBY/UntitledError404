const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)
  .post(usersController.login);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
