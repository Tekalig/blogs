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

const PORT = 3000;



app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const data = req.body;

  const newPost = {
    id,
    data,
  };
  await axios.post("http://localhost:3005/events", {
    type: "PostCreated",
    data: newPost,
  });
  posts.push(newPost);
  res.status(201).send(newPost);
});

// create events end point
app.post("/events", (req, res) => {
  console.log(req.body.type);
  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
