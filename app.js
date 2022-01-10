const {
  MongoClient
} = require("mongodb");

// Connection URI
const uri =
  "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
        const database = client.db("fruitsDB");
        const haiku = database.collection("fruit");
        // create a document to insert
        const doc = {
          _id: 4,
          name: "Pear",
          rating: 8,
          review: "Good fruit on a hot day."
        }
        const result = await haiku.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
