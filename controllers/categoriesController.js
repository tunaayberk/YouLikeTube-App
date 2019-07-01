const Category = require("../models/category");

exports.new = (req, res) => {
  res.render("categories/new", {
    title: "New Category"
  });
};

exports.index = (req, res) => {
  Category.find()
    .then(categories => {
      res.render("categories/index", {
        categories: categories,
        title: "All Categories"
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.show = (req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      res.render("categories/show", {
        title: category.title,
        category: category
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/categories");
    });
};

exports.create = (req, res) => {
  Category.create(req.body.category)
    .then(() => {
      req.flash("success", "Your new category was created successfully.");
      res.redirect("/categories");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.render("categories/new", {
        category: req.body.category,
        title: "New Category"
      });
    });
};

exports.edit = (req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      res.render("categories/edit", {
        title: `Edit ${category.title}`,
        category: category
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/categories");
    });
};

exports.update = (req, res) => {
  Category.updateOne(
    {
      _id: req.body.id
    },
    req.body.category,
    {
      runValidators: true
    }
  )
    .then(() => {
      req.flash("success", "Your category was updated successfully.");
      res.redirect("/categories");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.render("categories/edit", {
        category: req.body.category,
        title: `Edit ${req.body.category.title}`
      });
    });
};

exports.destroy = (req, res) => {
  Category.deleteOne({
    _id: req.body.id
  })
    .then(() => {
      req.flash("success", "Your category was deleted successfully.");
      res.redirect("/categories");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/categories");
    });
};
