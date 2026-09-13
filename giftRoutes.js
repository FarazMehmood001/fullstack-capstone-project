const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const router = express.Router();

const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://localhost:27017"
);

async function connectToDatabase() {
  await client.connect();
  return client.db(process.env.MONGODB_DB || "product_db");
}

router.get("/api/gifts", async (req, res) => {
  const db = await connectToDatabase();
  const gifts = await db.collection("gifts").find({}).toArray();
  res.json(gifts);
});

router.get("/api/gifts/:id", async (req, res) => {
  const db = await connectToDatabase();
  const gift = await db.collection("gifts").findOne({
    _id: new ObjectId(req.params.id)
  });
  res.json(gift);
});

module.exports = router;
