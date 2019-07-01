exports.show = (req, res) => {
  // Check if our path is the root or a page
  const path = (req.path === '/') ? `/home` : req.path;

  // Render that path
  res.render(`pages${path}`); // views/pages/about
};