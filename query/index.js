const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// port number
const PORT = 3002;

// Create an express app
const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

const posts = [];

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    data.comments = [];
    posts.push(data);
  }

  if (type === "CommentCreated") {
    posts.forEach((post) => {
      if (post.id === data.postId) {
        post.comments.push(data);
      }
    });
  }

  console.log(posts);
  res.send({ status: "OK" });
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.listen(PORT, () => {
  console.log("Event bus listening on 3002");
});
