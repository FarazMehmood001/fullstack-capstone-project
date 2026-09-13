router.get("/api/search", async (req, res) => {
  const { category } = req.query;

  const db = await connectToDatabase();

  const query = category ? { category: category } : {};

  const results = await db.collection("gifts").find(query).toArray();

  res.json(results);
});
