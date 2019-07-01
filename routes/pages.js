const router = require("express").Router();

// Pages controllers
const PagesController = require("../controllers/pagesController");

const SessionsController = require("../controllers/sessionsController");

// Create our routes
router.get(`/`, PagesController.show);
router.get(`/about`, PagesController.show);
router.get(`/contact`, PagesController.show);
//sessions
router.get("/login", SessionsController.login);
router.post("/authenticate", SessionsController.authenticate);
router.post("/logout", SessionsController.logout);

module.exports = router;
