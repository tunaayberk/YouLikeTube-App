const router = require("express").Router();

// controllers
const VideosController = require("../controllers/videosController");

// routes
router.get(`/new`, VideosController.new);
router.get(`/`, VideosController.index);
router.get(`/:id`, VideosController.show);
router.post(`/`, VideosController.create);
router.get(`/:id/edit`, VideosController.edit);
router.post(`/update`, VideosController.update);
router.post(`/destroy`, VideosController.destroy);

module.exports = router;
