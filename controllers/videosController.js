const Video = require("../models/video");

exports.new = (req, res) => {
  res.render("videos/new", {
    title: "New Video Bookmark"
  });
};

exports.index = (req, res) => {
  Video.find()
    .then(videos => {
      res.render("videos/index", {
        videos: videos,
        title: "Bookmarked Videos"
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.show = (req, res) => {
  Video.findById(req.params.id)
    .then(video => {
      res.render("videos/show", {
        title: video.title,
        video: video
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/videos");
    });
};

exports.create = (req, res) => {
  Video.create(req.body.video)
    .then(() => {
      req.flash("success", "Your new video was bookmarked successfully.");
      res.redirect("/videos");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.render("videos/new", {
        video: req.body.video,
        title: "New Video"
      });
    });
};

exports.edit = (req, res) => {
  Video.findById(req.params.id)
    .then(video => {
      res.render("videos/edit", {
        title: `Edit ${video.title}`,
        video: video
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/videos");
    });
};

exports.update = (req, res) => {
  Video.updateOne(
    {
      _id: req.body.id
    },
    req.body.video,
    {
      runValidators: true
    }
  )
    .then(() => {
      req.flash("success", "Your video bookmark was updated successfully.");
      res.redirect("/videos");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.render("videos/edit", {
        video: req.body.video,
        title: `Edit ${req.body.video.title}`
      });
    });
};

exports.destroy = (req, res) => {
  Video.deleteOne({
    _id: req.body.id
  })
    .then(() => {
      req.flash("success", "Your video bookmark was deleted successfully.");
      res.redirect("/videos");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/videos");
    });
};
