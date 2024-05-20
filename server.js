// 
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;

// Initialize middleware
app.use(express.json());

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog");
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  }
};

// Get a specific article by name
app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});

// Get all articles
app.get("/api/articles", async (req, res) => {
  withDB(async (db) => {
    const articles = await db.collection("articles").find({}).toArray();
    res.status(200).json(articles);
  }, res);
});

// Add a new article
app.post("/api/articles", async (req, res) => {
  const newArticle = req.body;
  withDB(async (db) => {
    await db.collection("articles").insertOne(newArticle);
    res.status(200).json(newArticle);
  }, res);
});

// Update an article by name
app.put("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;
  const updatedArticle = req.body;
  withDB(async (db) => {
    await db.collection("articles").updateOne(
      { name: articleName },
      { $set: updatedArticle }
    );
    const updated = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(updated);
  }, res);
});

// Delete an article by name
app.delete("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;
  withDB(async (db) => {
    await db.collection("articles").deleteOne({ name: articleName });
    res.status(200).json({ message: "Article deleted" });
  }, res);
});

// Add a comment to an article
app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );
    const updateArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(updateArticleInfo);
  }, res);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
