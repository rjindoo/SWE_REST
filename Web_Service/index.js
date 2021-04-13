const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require("node-fetch");

// Import Routes
const homeRoutes = require('./routes/home')

app.use(cors())
app.use(bodyParser.json())
app.use('/', homeRoutes)

app.listen(3000, () => {
    console.log("Listening at 3000")
})