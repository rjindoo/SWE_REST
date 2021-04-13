const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Home")
})

app.post('/', (req, res) => {
    const {name, age} = req.body;
    res.send({"response": "hello"})
})

app.listen(8080, () => {
    console.log("Listening at 8080")
})