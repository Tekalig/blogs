const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
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

app.post("/posts/comment", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { postId, comment } = req.body;
  let newComment = commentByPostId.find(
    (content) => content.postId === postId
  );
  if (newComment) {
    newComment.data.push({ id, comment });
  } else {
    newComment = { postId, data: [{ id, comment }] }
    commentByPostId.push(newComment);
  }

  await axios.post("http://localhost:3005/events", {
    type: "CommentCreated",
    data: {
      id,
      comment,
      postId,
    },
  });

  res.status(201).send(newComment);
});

// create events end point
app.post('/events', (req, res)=>{
  console.log(req.body.type);
  res.send({status: 'OK'})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
