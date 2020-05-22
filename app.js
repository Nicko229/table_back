const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();

app.use(express.json())

console.log(process.env.SECRET_MESSAGE)


// Routes
app.get('/', (req, res) => {
    res.send("First Request!!!!!")
});

app.get("/users", (req, res) => {

    let users = ["Pawan", "Superguy", "Flutter Guy", "Max"]
    res.send({
        users: users
    })
})

app.post("/create_user", (req, res) => {
    console.log(req.body);

    res.send(`Created your user ${req.body.name}`)
})

mongoose.connect("mongodb+srv://<username>:<password>@cluster0-jksv6.mongodb.net/test?retryWrites=true&w=majority", (req, res) => {
    console.log("Connected to the database")
})

app.listen(3000, () => {
    console.log('listening to 3000')
})