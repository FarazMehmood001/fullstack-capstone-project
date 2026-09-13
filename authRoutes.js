const express = require("express");
const { MongoClient } = require("mongodb");

const router = express.Router();

const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://localhost:27017"
);

async function connectToDatabase() {
  await client.connect();
  return client.db(process.env.MONGODB_DB || "product_db");
}

// Locate the current user in the database using findOne.
router.get("/api/auth/current-user", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const email = req.query.email;

    const currentUser = await db.collection("users").findOne({ email });

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(currentUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to locate current user" });
  }
});

module.exports = router;
