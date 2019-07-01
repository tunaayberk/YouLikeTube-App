const router = require("express").Router();

const UsersController = require("../controllers/usersController");

//routes
router.get("/new", UsersController.new);
router.post("/", UsersController.new);

module.exports = router;
