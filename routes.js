const express = require("express");
const app = express();

// Import our Page Routes
const pageRoutes = require("./routes/pages");
const videosRoutes = require("./routes/videos");
const categoriesRoutes = require("./routes/categories");
const usersRoutes = require("./routes/users");

// Register our Page Routes with our app
app.use("/", pageRoutes);
app.use("/videos", videosRoutes);
app.use("/categories", categoriesRoutes);
app.use("/users", usersRoutes);

// Export our changes
module.exports = app;
