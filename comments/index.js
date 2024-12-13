const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors(
  {
    origin: "http://localhost:5173"
  }
));

const PORT = 3001;

const commentByPostId = [
  {
    postId: "123",
    data: [
      {
        id: "12333",
        comment: "This is my first post",
      },
    ],
  },
];

app.get("/posts/:id/comments", (req, res) => {
  const filterdComment = commentByPostId.filter(
    (comment) => comment.postId === req.params.id
  );
  res.status(200).send(filterdComment);
});

app.post("/posts/:id/comment", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const postId = req.params.id;
  const { comment } = req.body;
  const newComment = commentByPostId.find(
    (content) => content.postId === postId
  );
  if (newComment) {
    newComment.data.push({ id, comment });
  } else {
    commentByPostId.push({ postId, data: [{ id, comment }] });
  }

  res.status(201).send(newComment);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
