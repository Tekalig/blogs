const express = require("express");
const bodyParser = require("bodyParser")
const axios = require("axios")

// port number 
const PORT = 3005
// Create an express app
const app = express()

app.post('/events', async (req, res)=>{
    const event = req.body;

    await axios.post('http://localhost:3000/events', event)
    await axios.post('http://localhost:3001/events', event)
    await axios.post('http://localhost:3002/events', event)

    res.send({status: 'OK'})
})

app.listen(PORT, ()=>{
    console.log('Event bus listening on 3005')
});