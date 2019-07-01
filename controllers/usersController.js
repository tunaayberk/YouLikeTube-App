const User = require("../models/user");

exports.new = (req, res) => {
  res.render("users/new", {
    title: "New User"
  });
};

exports.create = (req, res) => {
  User.create(req.body.user)
    .then(() => {
      req.flash("success", "You are now registered.");
      res.redirect("/login");
    })
    .catch(err => {
      req.flash(`error','ERROR: ${err}`);
      req.redirect("/users/new");
    });
};
