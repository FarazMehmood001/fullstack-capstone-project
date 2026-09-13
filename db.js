const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectDB() {
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db(process.env.MONGODB_DB || 'product_db');
}

module.exports = { client, connectDB };
