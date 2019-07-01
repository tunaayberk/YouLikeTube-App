const router = require("express").Router();

// controllers
const CategoriesController = require("../controllers/categoriesController");

// routes
router.get(`/new`, CategoriesController.new);
router.get(`/`, CategoriesController.index);
router.get(`/:id`, CategoriesController.show);
router.post(`/`, CategoriesController.create);
router.get(`/:id/edit`, CategoriesController.edit);
router.post(`/update`, CategoriesController.update);
router.post(`/destroy`, CategoriesController.destroy);

module.exports = router;
