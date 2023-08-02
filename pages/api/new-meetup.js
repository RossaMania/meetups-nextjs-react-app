import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://${username}:${password}@cluster0.nfyp4en.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.error("Error occurred:", error);
      res
        .status(500)
        .json({ message: "An error occurred while inserting the data." });
    }
  }
}
export default handler;
