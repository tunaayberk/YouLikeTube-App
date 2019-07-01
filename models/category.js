const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String
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

module.exports = mongoose.model("Category", CategorySchema);
