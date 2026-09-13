const express = require("express");

const app = express();

app.use(express.json());

// Search route
app.get("/api/search", (req, res) => {
  const { category } = req.query;

  // Search/filter logic can be connected to the database here.
  res.json({
    message: "Search results",
    category: category || "all"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
