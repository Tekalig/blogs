const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const posts = {
    id: '123',
    title: 'My first post',
    content: 'This is my first post'
}

app.get('/posts', (req, res) => {
    res.send(posts);
    }
);

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const newPost = req.body;
    newPost.id = id;
    posts.push(newPost);
    res.send(newPost);
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);


