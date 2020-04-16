const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  // .post(usersController.login)
  .put(usersController.update)
  .delete(usersController.remove);
// .post(usersController.login);

module.exports = router;
