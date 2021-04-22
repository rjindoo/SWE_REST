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
    const data = req.body;
    console.log(data)
    let x = Math.random()
    if(x > 0.5) {
        res.send({"result": "True"})
    }
    else {
        res.send({"result": "False"})
    }
})

app.listen(8080, () => {
    console.log("Listening at 8080")
})