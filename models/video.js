const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    image: {
      type: String
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      default: "Uncategorized"
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Video", VideoSchema);
