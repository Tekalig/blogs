const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors(
    {
    origin: 'http://localhost:5173',
    credentials: true
    }
));

const PORT = 3000;

const posts = [{
    id: '123',
    data: {
    title: 'My first post',
    content: 'This is my first post'
    }
}];

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
    }
);

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const data = req.body;

    const newPost = {
        id,
        data
    };
    posts.push(newPost);
    res.status(201).send(newPost);
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);


